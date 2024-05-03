import {useDispatch, useSelector } from "react-redux";
import { setTheme } from "../features/theme/themeSlice";

const Switcher = () => {

    const themeState = useSelector((state: any) => state.theme);
    const dispatch = useDispatch()

    const getSelectorPosition = () => {
        if (themeState.selectedTheme === 1)
            return "4px"
        else if (themeState.selectedTheme === 2)
            return "21px"
        else
            return "38px"
    }
    
    const selectorPosition = getSelectorPosition()

    console.log("selectorPosition : ", selectorPosition)
    console.log("theme selected: ", themeState.selectedTheme)

 

  return (
    <div className='flex relative'>
      <div className='switchBox leftRounded' onClick={() => dispatch(setTheme(1))}></div>
      <div className='switchBox' onClick={() => dispatch(setTheme(2))}></div>
      <div className='switchBox rightRounded' onClick={() => dispatch(setTheme(3))}></div>
      <div className='themeSelector' style={{left: `${selectorPosition}`}}></div>
    </div>
  )
}

export default Switcher
