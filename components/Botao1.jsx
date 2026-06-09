"use client";

import dynamic from "next/dynamic";


const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);

const ModeloPDF = dynamic(() => import("./modelopdf"), { ssr: false });

// MEU COMPONENTE DE BOTÃO PARA BAIXAR O PDF
export default function BotaoBaixar({

textoBotao,
document,
cor,


}) {


  return (
    // PDFDownloadLink gera o PDF e cria o link de download
    <PDFDownloadLink
      document={document}
      fileName="modelo.pdf" // nome do arquivo
      className={`${cor} p-2 text-xl  text-center hover:scale-110 transition-transform  w-32 rounded font-bold`}
      
    >
        
         {textoBotao}
      {/* enquanto gera mostra "Gerando...", depois "Baixar PDF" */}
      {({ loading }) => (loading ? "Gerando..." : "Baixar PDF")}

       
    </PDFDownloadLink>
  );
}