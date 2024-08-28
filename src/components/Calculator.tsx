import Header from './Header'
import Display from './Display'
import Keyboard from './Keyboard'
import { useSelector } from 'react-redux'

const Calculator = () => {

  const state = useSelector((state: any) => state.calculator)

  console.log("state: ", state)

  return (
    <div className='calculator'>
      <Header />
      <Display />
      <Keyboard />
    </div>
  )
}

export default Calculator
