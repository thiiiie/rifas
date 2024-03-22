'use client'
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";
import { PixList } from "@/components/PixList";
import Image from "next/image";
import { getRandomInt } from "@/lib/utils";
import { Numbers } from "./numbers";
import { ListNumbers } from "./ListNumbers";

const steps = [
  "Os números da sua rifa serão enviados para o seu e-mail após o pagamento.",
  "Pode levar algum tempo até o e-mail chegar.",
  "Você deverá utilizar os dados que recebeu em seu e-mail para saber o ganhador.",
]

interface ThanksPageProps {
  params: {
    code: string
  }
}

export default function ThanksPage({ params }: ThanksPageProps) {
  const itemsQuantity = Number(params?.code ?? 1)

  return (
    <main>
      <div className="w-full flex-col min-h-[70vh] flex items-center justify-center pt-4">
        <div className="max-w-[500px] w-[90%] flex flex-col items-center justify-center py-4 bg-slate-200 border border-slate-300 rounded-xl">
          <div className="flex items-center justify-center gap-2 border-b border-slate-700 pb-4 w-full">
            <FaRegCheckCircle className="text-green-500" size={40} />

            <div>
              <h1 className="text-lg font-medium text-center">Obrigado por comprar!</h1>
              <p className="text-xs">Siga os passos abaixo.</p>
            </div>
          </div>

          <div className="w-[96%] bg-white my-2 rounded-xl flex flex-col items-center">
            <PixList list={steps} />
            
            <section className="flex flex-col items-start pl-4 justify-center font-medium w-full">
              <h2 className="text-lg">Seus números</h2>
              <ul className="flex flex-wrap gap-2 mt-2">
                <ListNumbers />
              </ul>
            </section>

            <section className="flex flex-col items-center justify-center p-4">
              <Link className="mt-2 rounded p-1 px-4 text-white font-medium text-md bg-green-700" href="/">Voltar</Link>
            </section>
          </div>
        </div>
      </div>

      <footer className="p-10 bg-footer-background text-[10px] leading-3 text-center flex flex-col items-center justify-center pb-20 mt-20 text-slate-600">
        <div className="flex items-center mb-4">
          <Image width={100} height={50} alt="Logo" src="/via-cap-colorido.png" />
          <Image width={120} height={50} alt="Logo" src="/fenapestalozzi.png" />
        </div>
        <p>Título de Capitalização da Modalidade Filantropia Premiável de Contribuição Única, emitido pela VIACAP Capitalização S/A, CNPJ 88.076.302/0001-94, aprovado pelo Processo SUSEP que consta no Título. SAC 0800 740 7819. OUVIDORIA 0800 703 1989, de segunda a sexta-feira, das 8h às 17h. É proibida a venda de título de capitalização a menores de dezesseis anos. O valor não exigido dentro do prazo prescricional, estabelecido pela legislação em vigor, acarretará a perda desse direito. A aquisição deste título implica a cessão de 100% do direito de resgate à FEDERAÇÃO NACIONAL DAS ASSOCIAÇÕES PESTALOZZI – FENAPESTALOZZI, certificada nos termos da legislação em vigor. Antes de contratar consulte previamente as Condições Gerais. As condições contratuais/regulamento deste produto protocolizadas pela sociedade junto à SUSEP poderão ser consultadas no endereço eletrônico www.susep.gov.br, de acordo com o número de processo constante da proposta. Consulte as informações legais da Resolução CNSP 382/2020 em www.viacapitalizacao.com.br/. Prêmios líquidos de imposto de renda. Confira o resultado dos sorteios e as condições de participação em www.gemeosbrasil.me. Imagens meramente ilustrativas.</p>

        <p className="mt-4">Desenvolvido por <span className="p-1 px-2 bg-blue-600 font-bold rounded-lg text-white">Incrível.Tech</span></p>
      </footer>
    </main>
  );
}