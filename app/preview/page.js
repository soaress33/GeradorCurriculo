// app/preview/page.js
 
"use client";
 
import { PDFViewer } from "@react-pdf/renderer";
import CurriculoSimples from "@/components/modelopdf";
import PdfDinamico from "@/components/pdfdinamico";
 
export default function Preview() {
  return (
    <PDFViewer
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <PdfDinamico />
    </PDFViewer>
  );
}