type Props = {
    value: string | number,
    divStyle?: string,
    buttonStyle?: string,
    func1?: () => void,
    func2?: () => void
}

const Button = ({value, divStyle, buttonStyle, func1, func2} : Props) => {

  const handleClick = () =>{
    if(func1) func1();
    if(func2) func2();
  } 

  return (
    <div className={divStyle}>
      <button className={`main-button ${buttonStyle}`} onClick={handleClick}>{value}</button>
    </div>
  )
}

export default Button
