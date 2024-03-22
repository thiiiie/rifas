import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

export function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function extractNumericValue(currencyString: string): number {
  // Remove todos os caracteres não numéricos, exceto o ponto decimal
  if (!currencyString) return 0
  const numericString = currencyString.replace(/[^\d,]/g, '')

  // Substitui a vírgula por ponto para garantir que parseFloat funcione corretamente
  const numericValue = parseFloat(numericString.replace(',', '.'))

  // Se o valor não for um número válido, retorna NaN
  return isNaN(numericValue) ? 0 : numericValue
}


export const currencyMask = (value: string) => {
  let v: string = value
    .replace(/\D/g, '')
  v = (Number(v) / 100).toFixed(2) + '';
  v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
  v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");

  return v.replace('.', ',');
}

export const cpfMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const isMobile = (agent: string) => {
  if (!agent) {
    return false;
  }

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent)
}

export function formatPhone(phoneNumber: string) {
  return phoneNumber
    .replace(/\D/g, '')
    .replace(/^(\d{2})\B/, '($1) ')
    .replace(/(\d{1})?(\d{4})(\d{4})/, '$1$2-$3')
}
