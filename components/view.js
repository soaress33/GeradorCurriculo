"use client";

import { PDFViewer } from "@react-pdf/renderer";
import PdfDinamico from "./pdfdinamico";

export default function VisualizadorPDF() {
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <PdfDinamico />
    </PDFViewer>
  );
}