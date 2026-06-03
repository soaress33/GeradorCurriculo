// app/preview/page.js
 
"use client";
 
import { PDFViewer } from "@react-pdf/renderer";
import ModeloPDF from "@/components/modelopdf";
import PDFDinamico from "@/components/pdfdinamico";
import Curriculum2 from "@/components/curriculum2";
 
export default function Preview() {
  return (
    <PDFViewer
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <PDFDinamico />
    </PDFViewer>
  );
}