import { IconMoon, IconSun } from "../Icones"

interface ButtonChangeThemeProps {
  tema: string
  alternarTema: () => void
}


export default function ButtonChangeTheme(props: ButtonChangeThemeProps) {
  // hidden sm:flex => Será hidden, a partir de telas sm será flex
  // lg: Dispositivos de tela larga
  return props.tema === 'dark' ? (
    <div onClick={props.alternarTema} className={`
        hidden sm:flex items-center
        cursor-pointer p-1 rounded-full
        bg-gradient-to-r from-yellow-300 to-yellow-600
        w-14 lg:w-24 h-8`}> 
        
      <div className={`flex items-center justify-center bg-white text-yellow-600 w-6 h-5 rounded-full`}>
        {IconSun(4)}
      </div>

      <div className={`hidden lg:flex items-center ml-4 text-white`}>
        <span className={`text-sm`}>Claro</span>
      </div>
    </div>
  ) : (
    <div onClick={props.alternarTema} className={`
        hidden sm:flex items-center justify-end
        cursor-pointer p-1 rounded-full
        bg-gradient-to-r from-gray-600 to-gray-900
        w-14 lg:w-24 h-8`}> 

      <div className={`hidden lg:flex items-center mr-2 text-gray-300`}>
        <span className={`text-sm`}>Escuro</span>
      </div>

      <div className={`flex items-center justify-center bg-black text-yellow-300 w-6 h-5 rounded-full`}>
        {IconMoon(4)}
      </div>
    </div>    
  )
}
