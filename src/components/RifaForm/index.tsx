'use client'
import { FiCheckCircle } from "react-icons/fi"
import { RifaCounter } from "../RifaCounter"
import { SelectButton } from "../SelectButton"
import { useState } from "react"
import { MIN_QUANTITY, PRICE } from "@/app/constants"
import { PhoneModal } from "../PhoneModal"
import { PhoneModalErrorField } from "../PhoneModal/error-field"

interface RifaFormProps {
  minQuantity?: number
  price?: number
  productId: number
}

export const RifaForm = ({
  minQuantity = MIN_QUANTITY,
  price = PRICE,
  productId
}: RifaFormProps) => {
  const [count, setCount] = useState(minQuantity)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > minQuantity) {
      setCount(count - 1)
    }
  }

  const incrementValue = (value: number) => {
    setCount(prevState => prevState + value)
  }

  return (
    <div>
      <section className="mt-2 grid grid-cols-3 gap-2">
        <SelectButton href="https://checkout.syfrapay.com/f9cc62-6/checkout/8jG4R2wd4YTzznC" onClick={() => incrementValue(5)} value="05" />
        <SelectButton href="https://checkout.syfrapay.com/f9cc62-6/checkout/vCWN02Pan95NGnD" onClick={() => incrementValue(10)} value="10" popular />
        <SelectButton href="https://checkout.syfrapay.com/f9cc62-6/checkout/6zEvcXm1Vj4dXe6" onClick={() => incrementValue(30)} value="30" />
        <SelectButton href="https://checkout.syfrapay.com/f9cc62-6/checkout/cYGI4c9DRuRCkc8" onClick={() => incrementValue(40)} value="40" />
        <SelectButton href="https://checkout.syfrapay.com/f9cc62-6/checkout/IofyHVlZOiQ4FXE" onClick={() => incrementValue(50)} value="50" />
        <SelectButton href="https://checkout.syfrapay.com/f9cc62-6/checkout/fd7rpBzh1OvrPMK" onClick={() => incrementValue(100)} value="100" />
      </section>

      {/* <RifaCounter
        count={count}
        increment={increment}
        decrement={decrement}
        setCount={setCount}
        minValue={minQuantity}
      />
      {
        count < minQuantity && (
          <PhoneModalErrorField>
            A quantidade mínima de títulos para participar é <strong className="text-green-700">{minQuantity}</strong>, digite um número maior ou igual a {minQuantity}.
          </PhoneModalErrorField>
        )
      }

      <PhoneModal quantity={count} productId={productId} value={price * count} count={count}>
        <button disabled={count < minQuantity} type="button" className="relative flex items-center justify-between p-4 bg-green-700 mt-2 rounded-lg w-full text-white font-extrabold disabled:bg-slate-600 disabled:opacity-60">
          <div className="w-[5%]" />
          <div className="flex items-center gap-2">
            <span>
              <FiCheckCircle />
            </span>
            <span>Quero Participar</span>
          </div>

          <span>
            {
              (price * count).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })
            }
          </span>
        </button>
      </PhoneModal> */}

    </div>
  )
}
