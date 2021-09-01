import MenuItem from "../util/MenuItem";
import { IconBell, IconeHome, IconeSettings, IconLogout } from '../Icones'
import Logo from "../util/Logo";
import useAuth from "../../data/hook/useAuth";
import ScreensNames from '../util/ScreensNames'


export default function Sidebar() {
  const {logout} = useAuth()
  return (
    <aside className={`
        flex flex-col
        bg-gray-200 text-gray-800
        dark:bg-gray-900 dark:text-gray-200
      `}>
      <div className={`
          flex flex-col items-center justify-center h-20 w-full
          bg-gradient-to-r from-indigo-500 via-blue-800 to-purple-800`}>
        <Logo />
      </div>
      <ul className="flex-grow ">
        <MenuItem url={ScreensNames.Home} text="Inicio" icone={IconeHome()}/>
        <MenuItem url={ScreensNames.Config} text="Ajustes" icone={IconeSettings()}/>
        <MenuItem url={ScreensNames.Notifications} text="Notificações" icone={IconBell()}/>
      </ul>
      <ul>
        <MenuItem classData={`
            dark:hover:bg-red-400
            dark:text-red-700
            hover:bg-red-400
            hover:text-white`}
            onClick={logout}
            url={ScreensNames.Authentication}
            text="Logout"
            icone={IconLogout()}/>
      </ul>
    </aside>
  )
}
