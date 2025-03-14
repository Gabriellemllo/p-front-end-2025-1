"use client";

import { useState } from "react";
import './styles.css'; 

const imagensDado = [
  "/fotos/number1.png",
  "/fotos/number2.png",
  "/fotos/number3.png",
  "/fotos/number4.png",
  "/fotos/number5.png",
  "/fotos/number6.png",
];

const Dado = ({ valor }) => {
  return <div><img src={imagensDado[valor - 1]} alt={`Número ${valor}`} width={50} /></div>;
};

export default function Home() {
  const [valorDado, setValorDado] = useState(1);

  const rolarDado = () => {
    setValorDado(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div>
      <h1>Jogo do Dado!!</h1>
      <Dado valor={valorDado} />
      <button onClick={rolarDado}>Aperte aqui</button>
    </div>
  );
}
