"use client"; 

import dynamic from "next/dynamic";


const VisualizadorPDF = dynamic(
  () => import("../components/view"), 
  { ssr: false }
);

export default function PreviewPage() {
  return (
    <main>
      <VisualizadorPDF />
    </main>
  );
}