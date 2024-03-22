export function formatCurrency(value?: number, showCurrency = true) {
  if (!showCurrency) {
    const validatedValue = value ?? 0
    return validatedValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  if (!value) {
    return "R$ 0,00"
  }

  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}