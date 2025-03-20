export function Dado(props){
    const valor = props.valor - 1;
    
    const imagensDado = [
        "/fotos/number1.png",
        "/fotos/number2.png",
        "/fotos/number3.png",
        "/fotos/number4.png",
        "/fotos/number5.png",
        "/fotos/number6.png",
      ];

      return <img src={imagensDado[valor]}></img>
}