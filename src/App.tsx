
import './App.css'
import Calculator from './components/Calculator'

function App() {

  //  Actions
  const sum = { type: "operations/sum"}
  const multiply = { type: "operations/sum"}
  const divide = { type: "operations/sum"}
  const subtract = { type: "operations/sum"}

  // Reducers
  
 return (
    <>
      <Calculator />
    </>
  )
}

export default App
