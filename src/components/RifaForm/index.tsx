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
}

export const RifaForm = ({
  minQuantity = MIN_QUANTITY,
  price = PRICE
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
        <SelectButton onClick={() => incrementValue(5)} value="05" />
        <SelectButton onClick={() => incrementValue(10)} value="10" popular />
        <SelectButton onClick={() => incrementValue(30)} value="30" />
        <SelectButton onClick={() => incrementValue(40)} value="40" />
        <SelectButton onClick={() => incrementValue(50)} value="50" />
        <SelectButton onClick={() => incrementValue(100)} value="100" />
      </section>

      <RifaCounter
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

      <PhoneModal value={price * count} count={count}>
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
      </PhoneModal>

    </div>
  )
}
