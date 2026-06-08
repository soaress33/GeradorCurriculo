"use client";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  { ssr: false }
);

const PdfDinamico = dynamic(() => import("./pdfdinamico"), {
  ssr: false,
});

export default function VisualizadorPDF() {
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <PdfDinamico />
    </PDFViewer>
  );
}