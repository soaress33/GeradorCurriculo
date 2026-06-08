"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Botao1 from "@/components/Botao1";
import PdfDinamico from "@/components/pdfdinamico";

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
        w-250
        h-90
        bg-white
        rounded-2xl   
        flex 
        flex-col
         `}
        >



            <div className="p-4  gap-2 flex flex-col  text-black">
                <div className="  text-2xl px-5  text-black">
                    <h1>Dados do currículo</h1>
                </div>
                <div className=" gap-7 justify-center  flex">
                    <div className="">
                        <h1 className="text-lg text-gray-300  font-semibold">Nome</h1>
                        <input
                            value={nome}
                            type="text"
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Marco Silva" className="w-110 rounded-lg h-12 p-2 border"></input>
                    </div>
                    <div className="">
                        <h1 className="text-lg text-gray-300 font-semibold">Cargo</h1>
                        <input
                            type="text"
                            value={cargo}
                            onChange={(e) => setCargo(e.target.value)}
                            placeholder="Jovem Aprendiz" className="w-110 p-2 rounded-lg h-12 border"></input>
                    </div>
                </div>

                <div className=" gap-7 py-5 justify-center  flex">
                    <div className="">
                        <h1 className="text-lg text-gray-300 font-semibold">Email</h1>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="marco@gmail.com" className="w-110 p-2 rounded-lg h-12 border"></input>
                    </div>
                    <div className="">
                        <h1 className="text-lg text-gray-300 font-semibold">Habilidades</h1>
                        <input
                            type="text"
                            value={habilidades}
                            onChange={(e) => setHabilidades(e.target.value)}
                            placeholder="Pacores Officies, Comunicação" className="w-110 p-2 rounded-lg h-12 border"></input>
                    </div>

                    
                </div>
                
            </div>

            <div className="px-2">
                <h1 className="text-black font-semibold text-2xl px-10">Escolha o modelo e baixe</h1>
                <div className="px-10 flex gap-2  p-2">
                    <PDFDownloadLink document={<PdfDinamico dados={dados} />} fileName="curriculo.pdf"
                        className="bg-blue-500 p-2 h-10   text-xl pt-2 rounded hover:scale-110 transition-transform text-center text-white"
                    > Baixar Currículo

                    </PDFDownloadLink>

                  <div className="">  
                    <a href="/">
                        <button className="bg-red-500 w-40 p-3 items-center font-bold text-2xl  flex justify-center rounded h-9">
                           Voltar
                        </button>
                    </a>
                    </div>


                </div>
            </div>




        </div>
    )
}   