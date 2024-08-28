import SwitchTheme from './SwitchTheme'

const Header = () => {
  return (
    <div className='flex space-between p1 text-white'>
      <div><h3>Calc</h3></div>
      <SwitchTheme />
    </div>
  )
}

export default Header
