type Props = {
    value: string | number,
    className?: string,
    func1?: () => void,
    func2?: () => void
}

const Button = ({value, className, func1, func2} : Props) => {

  const handleClick = () =>{
    if(func1) func1();
    if(func2) func2();
  } 

  return (
    <div className={className}>
      <button className={`main-button ${className}`} onClick={handleClick}>{value}</button>
    </div>
  )
}

export default Button
