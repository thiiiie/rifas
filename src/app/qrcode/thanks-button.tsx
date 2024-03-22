'use client'
import { fetchClient } from "@/lib/fetchClient"
import { getRandomInt } from "@/lib/utils"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { setCookie, parseCookies, destroyCookie } from 'nookies'

interface ThanksButtonProps {
  quantity?: string
}

export const ThanksButton = ({ quantity = "1" }: ThanksButtonProps) => {
  const { replace } = useRouter()

  async function handleGoThanks() {
    const cookies = parseCookies(null, {
      path: '/',
    });

    if (cookies.numbers) {
      destroyCookie(null, 'numbers', {
        path: '/',
      });
    }
    
    // const user = JSON.parse(cookies.user);

    // const data = await fetchClient({
    //   url: `/payments?filters[document][$eq]=${user.document}`,
    //   method: "GET",
    // })

    // console.log(data)

    const numbers = Array.from({ length: Number(quantity) }, () => getRandomInt(1246, 9999))

    setCookie(null, 'numbers', JSON.stringify(numbers), {
      path: '/',
    });

    replace(`/obrigado/${quantity}`)
  }

  return (
    <button onClick={handleGoThanks} className="mt-2 rounded p-1 px-4 text-white font-medium text-md bg-green-700">Já fiz o pagamento</button>
  )
}
