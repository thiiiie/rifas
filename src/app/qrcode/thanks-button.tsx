'use client'
import { StrapiPayment } from "@/@types/payment"
import { Loading } from "@/components/Loading"
import { fetchClient } from "@/lib/fetchClient"
import { getRandomInt } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { useState } from "react"

interface ThanksButtonProps {
  quantity?: string
}

export const ThanksButton = ({ quantity = "1" }: ThanksButtonProps) => {
  const { replace } = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleGoThanks() {
    try {
      setLoading(true)
      const cookies = parseCookies(null, {
        path: '/',
      });
  
      if (cookies.numbers) {
        destroyCookie(null, 'numbers', {
          path: '/',
        });
      }
      
      const user = JSON.parse(cookies.user);
  
      const response = await fetchClient<{ data: StrapiPayment[] }>({
        url: `/payments?filters[document][$eq]=${user.document}&sort=id:desc`,
        method: "GET",
      })
  
      const payment = response?.data[0]
  
      if (!payment || payment?.attributes?.status !== 'DONE') {
        return alert("Seu pagamento não foi encontrado")
      }
  
      const numbers = Array.from({ length: Number(quantity) }, () => getRandomInt(1246, 9999))
  
      setCookie(null, 'numbers', JSON.stringify(numbers), {
        path: '/',
      });
  
      replace(`/obrigado/${quantity}`)
    } catch (err) {
      console.error(err)
      alert("Ocorreu um erro ao buscar seu pagamento")
    } finally {
      setLoading(false)
    }
  }

  return (
    <button onClick={handleGoThanks} className="mt-2 rounded p-1 px-4 text-white font-medium text-md bg-green-700">
      {loading ? <Loading /> : <span>Já fiz o pagamento</span>}
    </button>
  )
}
