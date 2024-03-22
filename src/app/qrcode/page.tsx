'use client'
import Link from "next/link";
import { QRCodeCanvas } from "qrcode.react";
import { FiCopy } from "react-icons/fi";

interface QrCodePageProps {
  searchParams: {
    pixKey: string
    value: string
  }
}

export default function QrCodePage({ searchParams }: QrCodePageProps) {
  function handleCopyCode() {
    navigator.clipboard.writeText(searchParams.pixKey);
    window?.dataLayer?.push({
      event: "copy_code",
      value: searchParams.value,
    });
    alert("Código copiado com sucesso!");
  }
  
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="max-w-[400px] w-[90%] flex flex-col items-center justify-center p-4 bg-slate-200 border border-slate-300 rounded-xl">
        <h1 className="text-2xl font-bold text-center">Pagar QR Code</h1>

        <QRCodeCanvas includeMargin className="rounded-xl mt-4" size={250} value={searchParams.pixKey} />

        <p className="text-xs text-center mx-6 mt-2">Use o código copia e cola clicando no botão abaixo</p>

        <button onClick={handleCopyCode} className="flex items-center justify-center font-bold gap-2 mt-4 bg-green-700 w-full p-2 rounded-xl text-white hover:bg-green-800">
          <FiCopy />

          Copiar
        </button>

        <Link className="mt-2 text-sm underline" href="/">
          Voltar
        </Link>
      </div>
    </div>
  );
}