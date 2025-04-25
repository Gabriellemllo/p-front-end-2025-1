"use client";
import { useState } from "react";
import Link from "next/link";
import Footer from "../components/footer";

export default function ConversorTemperatura() {
  const [inputCelsius, setInputCelsius] = useState(""); 
  const [inputFahrenheit, setInputFahrenheit] = useState(""); 
  const [resultadoCelsius, setResultadoCelsius] = useState(""); 
  const [resultadoFahrenheit, setResultadoFahrenheit] = useState(""); 

  
  function convertCelsiusForFahrenheit() {
    const celsius = parseFloat(inputCelsius);
    if (!isNaN(celsius)) {
      const fahrenheit = ((celsius * 1.8) + 32).toFixed(2);
      setResultadoFahrenheit(fahrenheit); 
    } else {
      setResultadoFahrenheit(""); 
    }
  }

  function convertFahrenheitForCelsius() {
    const fahrenheit = parseFloat(inputFahrenheit);
    if (!isNaN(fahrenheit)) {
      const celsius = ((fahrenheit - 32) / 1.8).toFixed(2);
      setResultadoCelsius(celsius); 
    } else {
      setResultadoCelsius(""); 
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 to-white text-gray-900">
      <header className="w-full h-[60px] flex justify-center items-center bg-gray-900 text-white shadow-md">
        <h1 className="text-2xl font-semibold">Conversor de Temperatura</h1>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6">
        
        <div className="bg-white rounded-lg shadow p-6 mb-6 w-full max-w-md text-center">
          <label className="block mb-2 text-lg font-medium">
            Converter Celsius para Fahrenheit:
          </label>
          <input
            type="number"
            min={-273.15} 
            value={inputCelsius}
            onChange={(e) => setInputCelsius(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={convertCelsiusForFahrenheit}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Converter
          </button>
          <input
            disabled
            value={resultadoFahrenheit} 
            className="w-full text-center text-lg font-semibold bg-gray-100 rounded px-3 py-2 mt-3"
          />
        </div>

        
        <div className="bg-white rounded-lg shadow p-6 mb-6 w-full max-w-md text-center">
          <label className="block mb-2 text-lg font-medium">
            Converter Fahrenheit para Celsius:
          </label>
          <input
            type="number"
            min={-459.67} 
            value={inputFahrenheit}
            onChange={(e) => setInputFahrenheit(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={convertFahrenheitForCelsius}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Converter
          </button>
          <input
            disabled
            value={resultadoCelsius} 
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
