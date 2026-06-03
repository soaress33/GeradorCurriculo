"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import Botao1 from "@/components/Botao1";
import PDFDinamico from "@/components/pdfdinamico";


const PDFDownloadLink = dynamic(
    () => import("@react-pdf/renderer").then((m) => m.PDFDownloadLink),
    { ssr: false }

);

export default function Form() {
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [email, setEmail] = useState("");
    const [habilidades, setHabilidades] = useState("");

    const dados ={
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
                    <div clasName="bg-green-400">
                        <h1 className="text-lg text-gray-300  font-semibold">Nome</h1>
                        <input
                            value={nome}
                            type="text"
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Marco Silva" className="w-110 rounded-lg h-12 p-2 border"></input>
                    </div>
                    <div clasName="bg-green-400">
                        <h1 className="text-lg text-gray-300 font-semibold">Cargo</h1>
                        <input
                            type="text"
                            value={cargo}
                            onChange={(e) => setCargo(e.target.value)}
                            placeholder="Jovem Aprendiz" className="w-110 p-2 rounded-lg h-12 border"></input>
                    </div>
                </div>

                <div className=" gap-7 py-5 justify-center  flex">
                    <div clasName="bg-green-400">
                        <h1 className="text-lg text-gray-300 font-semibold">Email</h1>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="marco@gmail.com" className="w-110 p-2 rounded-lg h-12 border"></input>
                    </div>
                    <div clasName="bg-green-400">
                        <h1 className="text-lg text-gray-300 font-semibold">Habilidades</h1>
                        <input
                            type="text"
                            value={habilidades}
                            onChange={(e) => setHabilidades(e.target.value)}
                            placeholder="Pacores Officies, Comunicação" className="w-110 p-2 rounded-lg h-12 border"></input>
                    </div>
                </div>
            </div>

            <div className="">
                <h1 className="text-black font-semibold text-2xl px-10">Escolha o modelo e baixe</h1>
                <div className="px-9 p-2">
                    <PDFDownloadLink document={<PDFDinamico dados={dados} />} fileName="curriculo.pdf"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md text-center hover:bg-blue-600 transition-colors">
                        Baixar Currículo
                    </PDFDownloadLink>
                </div>
            </div>




        </div>
    )
}   