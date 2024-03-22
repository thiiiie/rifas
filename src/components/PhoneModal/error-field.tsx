import { cn } from "@/lib/utils"
import { FiAlertCircle } from "react-icons/fi"

interface PhoneModalErrorFieldProps {
  children: React.ReactNode
  showIcon?: boolean
  className?: string
}

export const PhoneModalErrorField = ({ children, showIcon = true, className}: PhoneModalErrorFieldProps) => {
  return (
    <p className={cn("w-full flex items-center gap-2 p-2 bg-yellow-100 mt-2 rounded-lg border border-yellow-300 text-sm", className)}>
      {showIcon && <FiAlertCircle size={20} />}

      <span>{children}</span>
    </p>
  )
}
