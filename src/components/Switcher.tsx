import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../features/theme/themeSlice";

const Switcher = () => {

  const themeState = useSelector((state: any) => state.theme);
  const dispatch = useDispatch()

  const getSelectorPosition = () => {
    if (themeState.selectedTheme === 'theme1')
      return "4px"
    else if (themeState.selectedTheme === 'theme2')
      return "21px"
    else
      return "38px"
  }

  const selectorPosition = getSelectorPosition()

  return (
    <div className='flex relative'>
      <div className='switchBox leftRounded' onClick={() => dispatch(setTheme('theme1'))}></div>
      <div className='switchBox' onClick={() => dispatch(setTheme('theme2'))}></div>
      <div className='switchBox rightRounded' onClick={() => dispatch(setTheme('theme3'))}></div>
      <div className='themeSelector' style={{ left: `${selectorPosition}` }}></div>
    </div>
  )
}

export default Switcher
