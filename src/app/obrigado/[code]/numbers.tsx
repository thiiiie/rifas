import React from 'react'
import { FiCheck } from 'react-icons/fi'

interface NumberProps {
  value: number
}

export const Numbers = ({ value }: NumberProps) => {
  return (
    <li className="text-sm flex items-center gap-1 text-white p-2 bg-green-800 opacity-80 rounded">
      <FiCheck />
      {value}
    </li>
  )
}
