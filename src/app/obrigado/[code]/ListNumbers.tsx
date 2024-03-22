'use client'

import { parseCookies } from "nookies"
import { Numbers } from "./numbers";

export const ListNumbers = () => {
  const cookies = parseCookies(null, {
    path: '/',
  });

  const listItems: number[] = JSON.parse(cookies.numbers)

  return (
    listItems.map((item, index) => (
      <Numbers key={index} value={item} />
    ))
  )
}
