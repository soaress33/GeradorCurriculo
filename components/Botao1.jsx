"use client";

import dynamic from "next/dynamic";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);

const ModeloPDF = dynamic(() => import("./modelopdf"), { ssr: false });

// MEU COMPONENTE DE BOTÃO PARA BAIXAR O PDF
export default function BotaoBaixar({}) {

  return (
    // PDFDownloadLink gera o PDF e cria o link de download
    <PDFDownloadLink
      titulo={"das"}
      document={<ModeloPDF />} // qual PDF gerar
      fileName="modelo.pdf" // nome do arquivo
      className="bg-orange-400 p-2  rounded font-bold"
    >

         <textoBotao/>
      {/* enquanto gera mostra "Gerando...", depois "Baixar PDF" */}
      {({ loading }) => (loading ? "Gerando..." : "Baixar PDF")}

       
    </PDFDownloadLink>
  );
}