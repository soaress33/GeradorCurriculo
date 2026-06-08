import Image from "next/image";

import VisualizadorPDF from "../components/view";
import Botao1 from "@/components/Botao1";




export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <div className="bg-[#201c1c] w-200 items-center gap-3  h-full p-10 flex flex-col rounded-lg">
        <div className="py-10 gap-9 text-white font-bold items-center flex flex-col">
          <h1 className="text-3xl">Júnior Soares</h1>
          <h3>SENAC - MG</h3>
        </div>

        <div className=" p-3 text-xl text-center w-160 text-gray-400 font-bold items-center flex flex-col">
          <p>Aula prática de geração de documentos PDF utilizando React, CSS, TailWind e Next.js.
            Neste projeto, criamos um formulário para coletar informações do usuário e gerar um
            currículo personalizado em PDF, explorando conceitos modernos de componentes, estilização
            e exportação de arquivos.</p>
        </div>

        <div className="py-2 w-full">
          <a href="./gerarpdf">
            <button className="bg-red-500 p-2  rounded">
              Crie seu proprio
            </button>
          </a>
        </div>

      </div>




    </div>
  );
}
