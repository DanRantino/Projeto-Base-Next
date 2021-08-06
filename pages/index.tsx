import { useState } from 'react'
import Div from '../components/body'
export default function Home() {
  const [color, setColor] = useState('blue')
  function trocaCor() {
    setColor('red')
  }
  return (
    <Div color={color}>
      <span>Olá Mundo</span>
      <button onClick={trocaCor}>click</button>
    </Div>
  )
}
