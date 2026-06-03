"use client";

import dynamic from "next/dynamic";


// dados de exemplo (depois podem vir de um formulário)
import ModeloPDF from "./modelopdf";

// PDFDownloadLink é um componente do @react-pdf/renderer,
// mas ele não funciona no servidor (Next.js roda parte do código no servidor),
// então usamos dynamic para carregar ele só no navegador
const PDFDownloadLink = dynamic(
  () =>
    import("@react-pdf/renderer").then(
      (mod) => mod.PDFDownloadLink
    ),
  { ssr: false }
);

// MEU COMPONENTE DE BOTÃO PARA BAIXAR O PDF
export default function BotaoBaixar({
 textoBotao,
 cor,
 
}) {

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