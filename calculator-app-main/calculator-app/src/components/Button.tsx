type Props = {
    value: string,
    className?: string
}

const Button = ({value, className} : Props) => {
  return (
    <div className={className}>
      <button className="main-button">{value}</button>
    </div>
  )
}

export default Button
