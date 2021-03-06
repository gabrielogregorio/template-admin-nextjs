import { createContext } from 'react'
import { useState, useEffect } from 'react'

interface AppContextProps {
  tema: string
  alternarTema: () => void
}

const AppContext = createContext<AppContextProps>({
  tema:'',
  alternarTema: null
})


export function AppProvider(props) {
  const [tema, setTema] = useState('')
  function alternarTema() {
    const novoTema = tema === '' ? 'dark' : ''
    setTema(novoTema)
    localStorage.setItem('tema', novoTema)
  }

  useEffect(() => {
    const value = localStorage.getItem('tema')
    setTema(value)
  }, [])

  return (
    <AppContext.Provider value={{tema, alternarTema}} >
      {props.children }
    </AppContext.Provider>
  )
}


export default AppContext 
