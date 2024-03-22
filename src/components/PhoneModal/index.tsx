'use client'
import { validateCPF } from "@/helpers/validateCPF"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cpfMask, formatPhone } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { BsArrowRight } from "react-icons/bs"
import { z } from "zod"
import { PhoneModalErrorField } from "./error-field"
import { fetchClient } from "@/lib/fetchClient"
import { PaymentAPIResponse } from "@/@types/payment-api"
import { useRouter } from "next/navigation"
import { formatCurrency } from "@/helpers/formatCurrency"
import { Loading } from "../Loading"

interface PhoneModalProps {
  children?: React.ReactNode
  value: number
  count?: number
}

const formSchema = z.object({
  phone: z.string({ required_error: "Informe seu telefone para continuar." }).min(14, "Digite o telefone completo"),
  name: z.string({ required_error: "Digite um nome" }).min(2, "Digite um nome válido"),
  document: z.string({ required_error: "Digite seu CPF" }).min(11, "Digite um CPF válido").transform(value => value.replace(/\D/g, "")),
})

type FormValues = z.infer<typeof formSchema>

export const PhoneModal = ({
  children,
  value,
  count
}: PhoneModalProps) => {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })
  const { push } = useRouter()

  function handleGoNextStep() {
    setStep(2)
  }


  async function onSubmit(data: FormValues) {
    try {
      setLoading(true);
      const cpfIsValid = validateCPF(data.document);

      if (!cpfIsValid) {
        setError("document", {
          message: "Digite um CPF válido"
        })
        return;
      }

      const response = await fetchClient<PaymentAPIResponse>({
        url: "/payments",
        method: "POST",
        body: {
          ...data,
          value,
        },
      });

      push(`/qrcode?pixKey=${response.pixKey}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent className="max-w-[500px] w-[90%] rounded-lg p-0">
        <DialogHeader className="flex items-start border-b border-b-slate-400 p-4">
          <DialogTitle className="text-xl">Checkout</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="px-4 pb-4">
          <p className="bg-[#C9F3FB] p-2 rounded-lg text-sm text-[#0C4855] font-medium">
            Você está adquirindo {count} cota(s) da ação {" "}
            <strong>
              CAMINHÃO VW/30.330 + 2 VIRTUS HL 2023/2024 com apenas {
                formatCurrency(value, false)
              }.
            </strong>
          </p>

          <fieldset className="mt-2 flex flex-col">
            <label htmlFor="phone" className="text-sm font-black text-gray-700">Informe seu telefone</label>
            <input
              maxLength={15}
              placeholder="( ) _____-____"
              type="text"
              id="phone"
              className="p-2 rounded-lg mt-1 border border-slate-300"
              {...register("phone", {
                onChange: e => {
                  e.target.value = formatPhone(e.target.value)
                  return e;
                }
              })}
            />

            {errors.phone?.message && (
              <PhoneModalErrorField>{errors.phone.message}</PhoneModalErrorField>
            )}
          </fieldset>

          {step > 1 && (
            <>
              <fieldset className="mt-2 flex flex-col">
                <label htmlFor="name" className="text-sm font-black text-gray-700">Informe seu nome completo</label>
                <input
                  maxLength={15}
                  type="text"
                  id="name"
                  className="p-2 rounded-lg mt-1 border border-slate-300"
                  {...register("name")}
                />

                {errors.name?.message && (
                  <PhoneModalErrorField>{errors.name.message}</PhoneModalErrorField>
                )}
              </fieldset>

              <fieldset className="mt-2 flex flex-col">
                <label htmlFor="document" className="text-sm font-black text-gray-700">Informe seu CPF</label>
                <input
                  maxLength={15}
                  type="text"
                  id="document"
                  placeholder="___.___.___-__"
                  className="p-2 rounded-lg mt-1 border border-slate-300"
                  {...register("document", {
                    onChange: e => {
                      e.target.value = cpfMask(e.target.value)
                      return e;
                    }
                  })}
                />

                {errors.document?.message && (
                  <PhoneModalErrorField>{errors.document.message}</PhoneModalErrorField>
                )}
              </fieldset>
            </>
          )}



          {step === 1 && (
            <button disabled={!watch("phone") || watch("phone")?.length < 14} onClick={handleGoNextStep} type="button" className="flex mt-2 rounded-lg items-center justify-center gap-2 text-lg font-bold text-white w-full bg-blue-700 p-2 disabled:bg-slate-600">
              <span>Continuar</span>
              <BsArrowRight />
            </button>
          )}

          {step === 2 && (
            <button disabled={loading} type="submit" className="flex mt-2 rounded-lg items-center justify-center gap-2 text-lg font-bold text-white w-full bg-blue-700 p-2 disabled:bg-slate-400">
              {loading ? (
                <Loading />
              ) : (
                <>
                  <span>Finalizar compra</span>
                  <BsArrowRight />
                </>
              )}
            </button>
          )}
        </form>


      </DialogContent>
    </Dialog>
  )
}
