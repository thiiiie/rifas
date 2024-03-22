import Image from "next/image"
import { FiMenu } from "react-icons/fi"

export const Header = () => {
  return (
    <>
      <header className="w-full fixed top-0 left-0 z-10 flex items-center justify-between p-6 bg-header-background text-header-foreground text-3xl">
        <Image className="w-14 h-auto" width={200} height={100} src="/logo.png" priority alt="logo imagem" />

        <FiMenu />
      </header>

      <div className="relative top-0 w-full h-[100px] bg-header-background" />
    </>
  )
}
