'use client'
import { useState } from "react"
import { FiMinus, FiPlus } from "react-icons/fi"

interface RifaCounterProps {
  count: number
  increment: () => void
  decrement: () => void
  setCount: (value: number) => void
  minValue?: number
}

export const RifaCounter = ({
  count,
  increment,
  decrement,
  setCount,
  minValue = 10
}: RifaCounterProps) => {

  return (
    <section className="flex items-center justify-center gap-2 w-full bg-background mt-2 px-4 py-2 rounded-xl shadow-md">
      <button disabled={count <= minValue} type="button" onClick={decrement} className="w-7 h-7 bg-background text-foreground border border-slate-400 flex items-center justify-center rounded-full disabled:opacity-20">
        <FiMinus />
      </button>

      <input 
        className="p-2 bg-background border border-slate-300 rounded-xl text-center text-slate-600 font-bold" 
        type="number"
        min={minValue}
        value={count} 
        onChange={e => setCount(Number(e.target.value))} 
      />

      <button type="button" onClick={increment} className="w-7 h-7 bg-selectButton-background text-selectButton-foreground flex items-center justify-center rounded-full">
        <FiPlus />
      </button>
    </section>
  )
}
