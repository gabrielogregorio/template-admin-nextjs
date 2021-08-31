import MenuItem from "./MenuItem";
import { IconBell, IconeHome, IconeSettings, IconLogout } from '../Icones'
import Logo from "./Logo";
export default function Sidebar() {
  return (
    <aside className={`
        flex flex-col
        bg-gray-200 text-gray-800
        dark:bg-gray-900 dark:text-gray-200
      `}>
      <div className={`flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-blue-800 to-purple-800 h-20 w-full`}>
        <Logo />
      </div>
      <ul className="flex-grow ">
        <MenuItem  url="/" text="Inicio" icone={IconeHome}/>
        <MenuItem  url="/ajustes" text="Ajustes" icone={IconeSettings}/>
        <MenuItem  url="/notificacoes" text="Notificações" icone={IconBell}/>
      </ul>
      <ul>
        <MenuItem classData={`
          dark:hover:bg-red-400
          dark:text-red-700

          hover:bg-red-400
          hover:text-white

`} onClick={() => console.log('Saindo..')}  url="/" text="Logout" icone={IconLogout}/>
      </ul>
    </aside>
  )
}
