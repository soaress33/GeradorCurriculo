"use client";

import dynamic from "next/dynamic";
import ModeloPDF from "./modelopdf";
import Curriculo1 from "./curriculum1";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  { ssr: false }
);

export default function VisualizadorPDF() {
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
   <Curriculo1 />
    </PDFViewer>
         
  );
}