import Link from "next/link";
import Footer from "../components/footer";

export default function Sobre() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-slate-100 text-zinc-900">
      <header className="w-full h-[60px] flex justify-center items-center bg-gray-900 text-white shadow-md">
        <h1 className="text-[32px]">Sobre</h1>
      </header>
      
      <main className="p-8">
        <section className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Quem sou eu?</h2>
          <p>
            Olá, meu nome é <strong>Maria Gabrielle</strong>, sou estudante de <strong>Sistemas para Internet</strong> na <a href="https://portal.unicap.br/" target="_blank" className="underline text-blue-600">UNICAP</a>, onde estou aprendendo a desenvolver projetos web e banco de dados. Sou fascinada por tecnologia, especialmente nas áreas de <strong>Dados</strong> e <strong>Inteligência Artificial (IA)</strong>.
          </p>

          <p className="mt-4">
            Gosto de participar de hackathons e cursos para me aprofundar cada vez mais em diferentes áreas de tecnologia, como <strong>desenvolvimento web</strong>, <strong>design</strong>, <strong>gestão de projetos</strong> e <strong>entre outras</strong>.
          </p>
        </section>

        <button className="w-full flex justify-center py-4">
        <Link
          href="/"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Voltar
        </Link>
      </button>
      
      </main>

     <Footer/>
    </div>
  );
}
