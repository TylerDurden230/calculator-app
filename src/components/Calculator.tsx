import Header from './Header'
import Display from './Display'
import Keyboard from './Keyboard'

const Calculator = () => {

  return (
    <div className='calculator debug-border'>
      <Header />
      <Display />
      <Keyboard />
    </div>
  )
}

export default Calculator
