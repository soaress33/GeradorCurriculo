"use client";

import { useState } from "react";
import { ArrowDownToLine } from 'lucide-react';
import dynamic from "next/dynamic";
import Link from "next/link";
import Botao1 from "@/components/Botao1";
import PdfDinamico from "@/components/pdfdinamico";
import PDF1 from "./modelopdf";

const PDFDownloadLink = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
    { ssr: false }
);

const PDFDinamico = dynamic(() => import("@/components/pdfdinamico"), {
    ssr: false,
});

export default function Form() {
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [email, setEmail] = useState("");
    const [habilidades, setHabilidades] = useState("");

    const dados = {
        nome,
        cargo,
        email,
        habilidades,
    };


    return (
        <div
            className={`
        
        p-5
       bg-slate-300
        rounded-2xl   
        flex 
        flex-col
        justify-center
        text-black
                


         `}
        >



                <div className="  text-xl md:text-2xl px-5 font-bold text-black">
                    <h1>Dados do Currículo</h1>
                </div>

              <div className="gap-4 items-center justify-center flex flex-col">
                <div className="">
                    <h1 className="text-lg  font-semibold">Nome</h1>
                    <input
                        value={nome}
                        type="text"
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Marco Silva" className="w-90 md:w-120 rounded-lg h-12 p-2 border"></input>
                </div>
                <div className="">
                    <h1 className="text-lg  font-semibold">Cargo</h1>
                    <input
                        type="text"
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                        placeholder="Jovem Aprendiz" className="w-90 md:w-120 p-2 rounded-lg h-12 border"></input>
                </div>


                <div className="">
                    <h1 className="text-lg font-semibold">Email</h1>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="marco@gmail.com" className="w-90 md:w-120 p-2 rounded-lg h-12 border"></input>
                </div>
                <div className="">
                    <h1 className="text-lg font-semibold">Habilidades</h1>
                    <input
                        type="text"
                        value={habilidades}
                        onChange={(e) => setHabilidades(e.target.value)}
                        placeholder="Pacores Officies, Comunicação" className="w-90 md:w-120 p-2 rounded-lg h-12 border"></input>
                </div>
            </div>  





                <div className=" p-4     w-full">
                    <h1 className="text-black font-semibold text-2xl px-10">Baixe seu Currículo Aqui

                        
                    </h1>
                    <div className="px-10 flex gap-2 justify-between   p-2">
                        <PDFDownloadLink document={<PDF1 dados={dados} />} fileName="curriculo.pdf"
                            className="bg-blue-500 p-2 h-10 flex  gap-3 text-xl pt-2 rounded hover:scale-110 transition-transform text-center text-white"
                        > Baixar 
                    <ArrowDownToLine />
                        </PDFDownloadLink>

                        <div className="">
                            <a href="/">
                                <button className="bg-red-500 w-40 p-3 hover:scale-110 transition-transform text-white items-center font-bold text- xl  flex justify-center rounded h-9">
                                    Voltar
                                </button>
                            </a>
                        </div>


                    </div>
                </div>
          



        </div>
    )
}   