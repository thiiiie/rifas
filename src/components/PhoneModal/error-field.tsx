import { FiAlertCircle } from "react-icons/fi"

interface PhoneModalErrorFieldProps {
  children: React.ReactNode
}

export const PhoneModalErrorField = ({ children}: PhoneModalErrorFieldProps) => {
  return (
    <p className="w-full flex items-center gap-2 p-2 bg-yellow-100 mt-2 rounded-lg border border-yellow-300 text-sm">
      <FiAlertCircle size={40} />

      <span>{children}</span>
    </p>
  )
}
