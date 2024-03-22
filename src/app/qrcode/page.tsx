'use client'
import Link from "next/link";
import { QRCodeCanvas } from "qrcode.react";
import { FiCopy, FiInfo } from "react-icons/fi";
import { productWithIds, products } from "../constants";
import { FaRegCheckCircle } from "react-icons/fa";
import { PixList } from "@/components/PixList";
import { PhoneModalErrorField } from "@/components/PhoneModal/error-field";
import Image from "next/image";
import { getRandomInt } from "@/lib/utils";
import { ThanksButton } from "./thanks-button";

interface QrCodePageProps {
  searchParams: {
    pixKey: string
    value: string
    name: string
    phone: string
    document: string
    productId: "1" | "2" | "3"
    quantity: string
  }
}

export default function QrCodePage({ searchParams }: QrCodePageProps) {
  const product = productWithIds[searchParams?.productId ?? "1"]
  function handleCopyCode() {
    navigator.clipboard.writeText(searchParams.pixKey);
    window?.dataLayer?.push({
      event: "copy_code",
      value: searchParams.value,
    });
    alert("Código copiado com sucesso!");
  }

  return (
    <div className="w-full flex-col min-h-screen flex items-center justify-center pt-4">
      <div className="max-w-[500px] w-[90%] flex flex-col items-center justify-center py-4 bg-slate-200 border border-slate-300 rounded-xl">
        <div className="flex items-center justify-center gap-2 border-b border-slate-700 pb-4 w-full">
          <FaRegCheckCircle className="text-yellow-500" size={40} />

          <div>
            <h1 className="text-lg font-medium text-center">Aguardando pagamento!</h1>
            <p className="text-xs">Finalize o pagamento</p>
          </div>
        </div>

        <div className="w-[96%] bg-white my-2 rounded-xl flex flex-col items-center">
          <PixList onCopy={handleCopyCode} code={searchParams.pixKey} />
          
          <section className="flex flex-col items-center justify-center p-4">
            <PhoneModalErrorField className="text-xs text-yellow-800 leading-4" showIcon={false}>
              Este pagamento só pode ser realizado dentro do tempo, após este período, caso o pagamento não for confirmado os números voltam a ficar disponíveis.
            </PhoneModalErrorField>

            <ThanksButton quantity={searchParams.quantity} />

            <hr className="w-full text-slate-300 mt-4" />

            <QRCodeCanvas includeMargin className="rounded-xl mt-4" size={250} value={searchParams.pixKey} />

            <p className="text-xs text-center mx-6 mt-2">
              Acesse o APP do seu banco e escolha a opção pagar com QR Code, escaneie o código ao lado e confirme o pagamento.
            </p>

            <Link className="mt-6 pb-4 text-sm underline" href="/">
              Voltar
            </Link>
          </section>
        </div>

        <section className="w-[96%]">
          <div className="flex gap-2 p-2 bg-white rounded-xl w-full">
            <Image className="rounded-xl object-cover" src={product.image} alt={product.name} width={100} height={100} />
            
            <div>
              <h2 className="text-sm">{product.name}</h2>
              <p className="text-xs text-slate-600">Imagina ganhar {product.name}</p>
    
              <p className="mt-2 px-2 py-1 rounded-lg bg-green-700 font-extrabold text-xs w-fit text-white animate-pulse">Adquira já!</p>
              <Link href={product.path} className="text-xs mt-2">Sorteio <span className="font-medium">{product.code}</span></Link>
            </div>
          </div>

          <div className="flex flex-col mt-2 gap-2 p-2 bg-white rounded-xl w-full">
            <div className="text-sm">
              <h3 className="flex items-center gap-1 text-slate-600">
                <FiInfo />
                Detalhes da sua compra
              </h3>
              <p className="text-xs text-slate-400">a29624f8294d2072b737e0d87bb022a3</p>
            </div>

            <div className="text-sm">
              <p className="flex items-center gap-1 border-b border-slate-200 py-1">
                <strong>Comprador:</strong>
                <span className="text-slate-600">{searchParams.name}</span>
              </p>

              <p className="flex items-center gap-1 border-b border-slate-200 py-1">
                <strong>CPF:</strong>
                <span className="text-slate-600">{searchParams.document}</span>
              </p>

              <p className="flex items-center gap-1 border-b border-slate-200 py-1">
                <strong>Telefone:</strong>
                <span className="text-slate-600">{searchParams.phone}</span>
              </p>

              <p className="flex items-center gap-1 border-b border-slate-200 py-1">
                <strong>Valor:</strong>
                <span className="text-slate-600">R$ {searchParams.value}</span>
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className="p-10 bg-footer-background text-[10px] leading-3 text-center flex flex-col items-center justify-center pb-20 mt-20 text-slate-600">
        <div className="flex items-center mb-4">
          <Image width={100} height={50} alt="Logo" src="/via-cap-colorido.png" />
          <Image width={120} height={50} alt="Logo" src="/fenapestalozzi.png" />
        </div>
        <p>Título de Capitalização da Modalidade Filantropia Premiável de Contribuição Única, emitido pela VIACAP Capitalização S/A, CNPJ 88.076.302/0001-94, aprovado pelo Processo SUSEP que consta no Título. SAC 0800 740 7819. OUVIDORIA 0800 703 1989, de segunda a sexta-feira, das 8h às 17h. É proibida a venda de título de capitalização a menores de dezesseis anos. O valor não exigido dentro do prazo prescricional, estabelecido pela legislação em vigor, acarretará a perda desse direito. A aquisição deste título implica a cessão de 100% do direito de resgate à FEDERAÇÃO NACIONAL DAS ASSOCIAÇÕES PESTALOZZI – FENAPESTALOZZI, certificada nos termos da legislação em vigor. Antes de contratar consulte previamente as Condições Gerais. As condições contratuais/regulamento deste produto protocolizadas pela sociedade junto à SUSEP poderão ser consultadas no endereço eletrônico www.susep.gov.br, de acordo com o número de processo constante da proposta. Consulte as informações legais da Resolução CNSP 382/2020 em www.viacapitalizacao.com.br/. Prêmios líquidos de imposto de renda. Confira o resultado dos sorteios e as condições de participação em www.gemeosbrasil.me. Imagens meramente ilustrativas.</p>

        <p className="mt-4">Desenvolvido por <span className="p-1 px-2 bg-blue-600 font-bold rounded-lg text-white">Incrível.Tech</span></p>
      </footer>
    </div>
  );
}