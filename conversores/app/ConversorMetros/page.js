"use client";
import { useState } from "react";
import Link from "next/link";
import Footer from "../components/footer";

export default function ConversorMetros() {
  const [resultadoMetros, setResultadoMetros] = useState({
    pes: 0,
    polegadas: 0
  });
  const [inputMetros, setInputMetros] = useState("");
  const [inputPolegadas, setInputPolegadas] = useState("");
  const [resultadoMetrosConvertido, setResultadoMetrosConvertido] = useState(0);


  function converterParaPesEPolegadas() {
    const metros = parseFloat(inputMetros);
    if (!isNaN(metros)) {
      const pes = (metros * 3.28084).toFixed(2); 
      const polegadas = (metros * 39.3701).toFixed(2); 
      setResultadoMetros({ pes, polegadas });
    }
  }


  function converterParaMetros() {
    const polegadas = parseFloat(inputPolegadas);
    if (!isNaN(polegadas)) {
      const metros = (polegadas * 0.0254).toFixed(2); 
      setResultadoMetrosConvertido(metros);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 to-white text-gray-900">
      <header className="w-full h-[60px] flex justify-center items-center bg-gray-900 text-white shadow-md">
        <h1 className="text-2xl font-semibold">Conversor de Metros para Pés e Polegadas</h1>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6">
        
        <div className="bg-white rounded-lg shadow p-6 mb-6 w-full max-w-md text-center">
          <label className="block mb-2 text-lg font-medium">
            Converter Metros para Pés e Polegadas:
          </label>
          <input
            type="number"
            min={0}
            value={inputMetros}
            onChange={(e) => setInputMetros(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={converterParaPesEPolegadas}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Converter
          </button>
          <input
            disabled
            value={`Pés: ${resultadoMetros.pes} | Polegadas: ${resultadoMetros.polegadas}`}
            className="w-full text-center text-lg font-semibold bg-gray-100 rounded px-3 py-2 mt-3"
          />
        </div>

        
        <div className="bg-white rounded-lg shadow p-6 mb-6 w-full max-w-md text-center">
          <label className="block mb-2 text-lg font-medium">
            Converter Polegadas para Metros:
          </label>
          <input
            type="number"
            min={0}
            value={inputPolegadas}
            onChange={(e) => setInputPolegadas(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={converterParaMetros}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Converter
          </button>
          <input
            disabled
            value={resultadoMetrosConvertido}
            className="w-full text-center text-lg font-semibold bg-gray-100 rounded px-3 py-2 mt-3"
          />
        </div>
      </main>

      
      <button className="w-full flex justify-center py-4">
        <Link
          href="/"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Voltar
        </Link>
      </button>

      <Footer />
    </div>
  );
}
