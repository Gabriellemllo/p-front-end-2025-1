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

const Dado = ({ valor, texto }) => {
  return (
    <div className="dado-container">
      <p className="texto-dado">{texto}</p>
      <img src={imagensDado[valor - 1]} alt={`Número ${valor}`} width={100} />
    </div>
  );
};

export default function Home() {
  const [rounds, setRounds] = useState(1); 
  const [counters, setCounters] = useState([[], []]); 
  const [current, setCurrent] = useState(0); 

  
  const points = counters
    .map((counter) => counter.reduce((a, b) => a + b, 0)) 
    .map((points, i) => ({
      points,
      player: i + 1,
    }))
    .sort((a, b) => b.points - a.points); 

  function randomNumber(index) {
    
    if (rounds > 5) return;

    
    const random = Math.floor(Math.random() * 6) + 1;
    const copy = [...counters];
    copy[index].push(random); 
    setCounters(copy);

   
    setCurrent(current === counters.length - 1 ? 0 : current + 1);

    
    if (copy[0].length === rounds && copy[1].length === rounds) {
      setRounds(rounds + 1); 
    }
  }

  return (
    <>
      <div className="container">
      <h1>Jogo do Dado!!</h1>
        <p>Rodada: {rounds}</p>

        <div className="divDado">
          {counters.map((counter, i) => (
            <div key={`counter-${i}`} className="divKey">
              
              <Dado valor={counter.slice(-1)[0] || 1} texto={`Jogador ${i + 1}`} />

              <button
                disabled={i !== current || rounds > 5}
                onClick={() => randomNumber(i)}
              >
                Jogar
              </button>
            </div>
          ))}
        </div>

        
        {rounds === 5 && (
          <div>
            <p>Jogo terminado! 🎲</p>
            <p>🏆 Vencedor: Jogador {points[0].player} com {points[0].points} pontos!</p>

            <button
              className="reiniciar"
              onClick={() => {
                setRounds(1);
                setCounters([[], []]);
                setCurrent(0);
              }}
            >
              Jogar Novamente
            </button>
          </div>
        )}
      </div>
    </>
  );
}
