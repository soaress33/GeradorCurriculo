"use client";


import { useState } from "react";
import Image from "next/image";
import PDFelementos from "@/components/pdfdinamico";
import BotaoBaixar from "@/components/Botao1";
import  Link  from "next/link";



export default function Home() {
  return (
    <div className="flex flex-col bg-white flex-1 items-center justify-center">
      <div className="bg-slate-300 shadow-2xl w-200 items-center gap-3  h-full p-10 flex flex-col rounded-lg">
        <div className="py-10 gap-9 text-cyan-600  font-bold items-center flex flex-col">
          <h1 className="text-3xl">Júnior Soares</h1>
          <h3>SENAC - MG</h3>
        </div>

        <div className=" p-3 text-xl text-center w-160 text-cyan-600  font-bold items-center flex flex-col">
          <p>Aula prática de geração de documentos PDF utilizando React, CSS, TailWind e Next.js.
            Neste projeto, criamos um formulário para coletar informações do usuário e gerar um
            currículo personalizado em PDF, explorando conceitos modernos de componentes, estilização
            e exportação de arquivos.</p>
        </div>

        <div className="py-2 flex items-center gap-6   w-full">
         
         <Link 
         href="./gerarpdf"
         className=" text-center p-2 hover:scale-110 transition-transform w-32 text-xl bg-orange-400 rounded font-bold"
         >

         Crie o seu
         </Link>
            
        
          <BotaoBaixar
            document={<PDFelementos />}
            textoBotao="PDF 1"
            cor='bg-blue-400'
          />

        </div>

      </div>




    </div>
  );
}
