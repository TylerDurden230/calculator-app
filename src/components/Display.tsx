import {useState} from "react";

const Display = () => {

  const [display, setDisplay] = useState<string>("")

  return (
    <div className='debug-border p1 display'>
      <h2>{display}</h2>
    </div>
  )
}

export default Display
