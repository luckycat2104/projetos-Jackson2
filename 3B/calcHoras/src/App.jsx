import { useState } from 'react'
import './App.css'

function App() {
  const [hi, setHi] = useState(0);
  const [mi, setMi] = useState(0);
  const [hf, setHf] = useState(0);
  const [mf, setMf] = useState(0);
  const [resultado, setResultado] = useState("Resultado");

  const soma = () => {
    let somaHora = Number(hi.value) + Number(hf.value);
    let somaMinuto = Number(mi.value) + Number(mf.value);
    while (somaMinuto> 59) {
      somaMinuto -= 60;
      somaHora++;
    }
    setResultado(`${somaHora}:${somaMinuto}`)
  }

  const sub = () => {
    let resultadoHora = Number(hi.value) + Number(hf.value);
    let resultadoMinuto = Number(mi.value) + Number(mf.value);
    while (resultadoMinuto> 59) {
      resultadoMinuto -= 60;
      resultadoHora++;
    }
    setResultado(`${somaHora}:${somaMinuto}`)
  }

  return (
    <>
      <h1>Calculadora de Horas</h1>
      <div class="form">
        <h3>Escolha os Horários que deseja calcular!</h3>
        <input type="number" 
        value={hi}
        onChange={(e) => setHI(e.target.value)}
        placeholder='Hora inicial'
         /> &nbsp; :&nbsp;

        <input 
        type="number" 
        value={mi}
        onChange={(e) =>setMI(e.target.value)}
        placeholder="Minuto Inicial" /><br/>
        <input 
        type="number" 
        value={mi}
        onChange={(e) =>setMI(e.target.value)}
        placeholder="Minuto Inicial" /><br/>

        &nbsp;
        <button onclick="soma()">Soma</button>
        <button onclick="sub()">Diferença</button>
        <h3 id="r">Resultado</h3>
    </div>

    </>
  )
}

export default App
