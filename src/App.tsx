
import './App.css'
import Calculator from './components/Calculator'
import ThemeProvider from './providers/themeProvider'

function App() {

  return (
    <ThemeProvider >
        <Calculator />
    </ThemeProvider>
  )
}

export default App
