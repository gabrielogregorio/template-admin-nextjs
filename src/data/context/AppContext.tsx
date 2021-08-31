import { createContext } from 'react'
import { useState } from 'react'
type Tema = 'dark' | ''

interface AppContextProps {
  tema: Tema
  alternarTema: () => void
}

const AppContext = createContext<AppContextProps>({
  tema:'',
  alternarTema: null
})

export function AppProvider(props) {
  const [tema, setTema] = useState<Tema>('')
  function alternarTema() {
    if(tema == 'dark') {
      setTema('')
    } else {
      setTema('dark')
    }

  }

  return (
    <AppContext.Provider value={{tema, alternarTema}} >
      {props.children }
    </AppContext.Provider>
  )
}

export default AppContext 