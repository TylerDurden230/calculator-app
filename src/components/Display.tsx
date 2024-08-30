import { useSelector } from "react-redux";

const Display = () => {

  const display = useSelector((state: any) => state.calculator.display)
  const recap = useSelector((state: any) => state.calculator.recap)

  return (
    <div className='p1 display'>
      <div id="recap">
        <h5>{recap}</h5>
      </div>
      <div>
        <h2 id="value">{display}</h2>
      </div>
    </div>
  )
}

export default Display
