import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './components/theme-provider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme='dark' storageKey='once-ui-theme'>
    <div className='bg-background text-foreground'>Hello Once</div>
    </ThemeProvider>   
  )
}

export default App
