import { RifaForm } from "@/components/RifaForm";
import Image from "next/image";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { PRICE } from "./constants";

export default function Home() {
  return (
    <div className="flex flex-col items-center pb-20">
      <header className="w-full fixed top-0 left-0 z-10 flex items-center justify-between p-6 bg-header-background text-header-foreground text-3xl">
        <Image className="w-20 h-auto" width={200} height={100} src="/logo.png" priority alt="logo imagem" />

        <FiMenu />
      </header>


      <div className="relative top-12 w-full h-[100px] bg-header-background" />
      <main className="relative top-5 max-w-[600px] w-full bg-rifa-background p-4 rounded-2xl">
        <section className="bg-background rounded-2xl">
          <Image className="rounded-2xl w-full aspect-[5/4] object-cover rounded-b-none" width={600} height={600} priority src="/image1.jpeg" alt="imagem do produto" />

          <div className="p-4">
            <h1 className="text-md font-medium leading-5">CAMINHÃO VW/30.330 + 2 VIRTUS HL 2023/2024 COM APENAS 1,69</h1>
            <p className="text-xs text-gray-600">https://www.gemeosbrasil.me/campanha/1-kit-mundanca-de-vida-974-74241</p>
            <p className="mt-2 px-2 py-1 rounded-lg bg-green-700 font-extrabold text-xs w-fit text-white animate-pulse">Adquira já!</p>
          </div>
        </section>

        <button className="flex items-center justify-center gap-2 w-full bg-cart-button-background py-2 rounded-lg mt-3 text-white font-bold">
          <FiShoppingCart />
          Ver meus números
        </button>

        <p className="text-center flex items-center justify-center gap-2 text-sm mt-2">
          Por Apenas
          <span className="p-2 bg-selectButton-background text-selectButton-foreground rounded-lg font-bold">
            {
              PRICE.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })
            }
          </span>
        </p>

        <p className="mt-2 text-center bg-background p-2 rounded-xl text-sm font-medium text-gray-500">
          Quanto mais títulos comprar, maiores são as suas chances de ganhar!
        </p>

        <RifaForm />

        <section className="mt-2 py-4 px-2 flex flex-col gap-4 text-sm bg-background rounded-xl">
          <h2 className="font-black">PREMIAÇÃO: CAMINHÃO VW/30.330 + 2 VIRTUS HL 2023/2024 COM APENAS 1,69</h2>

          <p>CONFORME DETALHADO NAS CONDIÇÕES DE PARTICIPAÇÃO.</p>
        </section>


        <section className="mt-2">
          <h2 className="text-lg font-bold">
            🔥 Cotas premiadas 
            <span className="font-normal text-sm ml-1 text-slate-600">Achou ganhou!</span>
          </h2>

          <div className="h-5 w-full bg-background rounded-xl mt-2" />
        </section>
      </main>
    </div>
  );
}
