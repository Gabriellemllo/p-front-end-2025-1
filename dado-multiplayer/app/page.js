"use client";

import { useState } from "react";
import './styles.css';
import { Dado } from "../components/Dado"

const Dado_ = ({ valor, texto }) => {
  return (
    <div className="dado-container">
      <p className="texto-dado">{texto}</p>
      <Dado valor={valor}/>
    </div>
  );
};

export default function Home() {
  const [rounds, setRounds] = useState(1); 
  const [counters, setCounters] = useState([[], []]); 
  const [current, setCurrent] = useState(0); 
  const [roundWinners, setRoundWinners] = useState([]); 

  
  function randomNumber(index) {
    if (rounds > 5) return;

    const random = Math.floor(Math.random() * 6) + 1; 
    const copy = [...counters];
    copy[index].push(random); 
    setCounters(copy); 

    setCurrent(current === counters.length - 1 ? 0 : current + 1); 

    if (copy[0].length === rounds && copy[1].length === rounds) {
      setRounds(rounds + 1); 

      const roundWinner = copy[0][rounds - 1] > copy[1][rounds - 1] ? 1 : 2;
      setRoundWinners((prevWinners) => [
        ...prevWinners,
        { round: rounds, winner: roundWinner },
      ]);
    }
  }

  
  const totalPoints = counters.map(counter => counter.reduce((a, b) => a + b, 0)); 
  const finalWinner = totalPoints[0] > totalPoints[1] ? 1 : totalPoints[0] === totalPoints[1] ? 'Empate' : 2;

  return (
    <>
      <div className="container">
        <h1>Jogo do Dado!!</h1>
        <p>Rodada: {rounds}</p>

        <div className="divDado">
          {counters.map((counter, i) => (
            <div key={`counter-${i}`} className="divKey">
              <Dado_ valor={counter.slice(-1)[0] || 1} texto={`Jogador ${i + 1}`} />

              <button
                disabled={i !== current || rounds > 5}
                onClick={() => randomNumber(i)}
              >
                Jogar
              </button>
            </div>
          ))}
        </div>

       
        <div className="placar">
          <h3>Placar das Rodadas</h3>
          <ul>
            {roundWinners.map((roundInfo) => (
              <li key={roundInfo.round}>
                Rodada {roundInfo.round}: Vencedor Jogador {roundInfo.winner}
              </li>
            ))}
          </ul>
        </div>

        
        {rounds === 6 && (
          <div>
            <p>Jogo terminado! 🎲</p>
            {finalWinner === 'Empate' ? (
              <p>🏆 Empate! Ambos os jogadores têm {totalPoints[0]} pontos!</p>
            ) : (
              <p>🏆 Vencedor Final: Jogador {finalWinner} com {totalPoints[finalWinner - 1]} pontos!</p>
            )}

            <button
              className="reiniciar"
              onClick={() => {
                setRounds(1);
                setCounters([[], []]);
                setCurrent(0);
                setRoundWinners([]); 
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
