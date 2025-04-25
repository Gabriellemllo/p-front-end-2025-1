"use client";
import Link from "next/link";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 to-white text-gray-900">
      <header className="w-full h-[60px] flex justify-center items-center bg-gray-900 text-white shadow-md">
        <h1 className="text-2xl font-semibold">Conversores</h1>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6 text-center">
        <div className="flex flex-col gap-4 w-full max-w-xs mb-10">
          
          <Link
            href="/Sobre"
            className="bg-gray-800 text-white px-6 py-3 rounded shadow hover:bg-gray-700 transition"
          >
            Sobre Mim
          </Link>

          <Link
            href="/ConversorMetros"
            className="bg-gray-800 text-white px-6 py-3 rounded shadow hover:bg-gray-700 transition"
          >
            Conversor de Metros
          </Link>

          <Link
            href="/ConversorDolar"
            className="bg-gray-800 text-white px-6 py-3 rounded shadow hover:bg-gray-700 transition"
          >
            Conversor de Dólar
          </Link>

          <Link
          href="/ConversorTemperatura"
          className="bg-gray-800 text-white px 6  py-3 rounded shadow hover:bg-gray-700 transition"
          >
            Conversor de Temperatura
          </Link>

        </div>

        <p className="text-lg max-w-xl">
          <strong>Descrição: </strong>Este Site foi criado para facilitar tarefas simples do dia a dia, como conversão de temperatura, dinheiro e metros.
        </p>
      </main>

      <Footer />
    </div>
  );
}
