import Image from "next/image";
function Texto1(){
  return(
    <p>Um parágrafo de texto!</p>
  )
}
export default function Home() {
  const aula =2;
  return (
    //<> ,</> é um tipo de div lembre-se 
   <div>
    <h1><strong>Olá Turma!!!</strong></h1>
    <p>Essa é a nossa {aula}ª aula de React!</p>
    <Texto1/>
    <Texto1/>
   </div>
  );
}
