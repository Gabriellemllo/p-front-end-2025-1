"use client";
import { useState } from "react";
import Link from "next/link";
import Footer from "../components/footer";

export default function ConversorMoeda() {
  const [realParaDolar, setRealParaDolar] = useState("");  
  const [dolarParaReal, setDolarParaReal] = useState("");  
  const cotacao = 5.87;  

  // Função para converter Real para Dólar
  function convertRealForDolar() {
    const valor = parseFloat(realParaDolar);
    if (!isNaN(valor) && valor > 0) {
      const convertido = (valor / cotacao).toFixed(2); 
      setRealParaDolar(convertido); 
    } else {
      setRealParaDolar(""); 
    }
  }

 
  function convertDolarForReal() {
    const valor = parseFloat(dolarParaReal); 
    if (!isNaN(valor) && valor > 0) {
      const convertido = (valor * cotacao).toFixed(2); 
      setDolarParaReal(convertido); 
    } else {
      setDolarParaReal(""); 
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 to-white text-gray-900">
      <header className="w-full h-[60px] flex justify-center items-center bg-gray-900 text-white shadow-md">
        <h1 className="text-2xl font-semibold">Conversor de Moeda</h1>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6">
        <div className="bg-white rounded-lg shadow p-6 mb-6 w-full max-w-md text-center">
          <label className="block mb-2 text-lg font-medium">
            Converter Real para Dólar:
          </label>
          <input
            type="number"
            min={0}
            value={realParaDolar} 
            onChange={(e) => setRealParaDolar(e.target.value)} 
            className="w-full px-3 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={convertRealForDolar} 
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Converter
          </button>
          <input
            disabled
            value={`$ ${realParaDolar}`} 
            className="w-full text-center text-lg font-semibold bg-gray-100 rounded px-3 py-2 mt-3"
          />
        </div>

        <div className="bg-white rounded-lg shadow p-6 w-full max-w-md text-center">
          <label className="block mb-2 text-lg font-medium">
            Converter Dólar para Real:
          </label>
          <input
            type="number"
            min={0}
            value={dolarParaReal} 
            onChange={(e) => setDolarParaReal(e.target.value)} 
            className="w-full px-3 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={convertDolarForReal} 
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Converter
          </button>
          <input
            disabled
            value={`R$ ${dolarParaReal}`} 
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
