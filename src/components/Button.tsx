type Props = {
    value: string | number,
    className?: string,
    func?: () => void
}

const Button = ({value, className, func} : Props) => {
  return (
    <div className={className}>
      <button className="main-button" onClick={func}>{value}</button>
    </div>
  )
}

export default Button
