import { useSelector } from "react-redux";

const Display = () => {

  const display = useSelector((state: any) => state.calculator.display)

  return (
    <div className='debug-border p1 display'>
      <h2>{display}</h2>
    </div>
  )
}

export default Display
