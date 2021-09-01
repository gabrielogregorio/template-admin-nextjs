import useAppData from "../../data/hook/useAppData";
import Avatar from "../util/AvatarUsuario";
import ButtonChangeTheme from "../util/ButtonChangeTheme";
import Title from "../util/Title";

interface HeaderProps {
  titulo: string
  subtitulo: string
}


export default function Header(props: HeaderProps) {
  const context = useAppData()
  return (
    <div className={`flex`}>
      <Title titulo={props.titulo} subtitulo={props.subtitulo}/>
      <div className={`flex flex-grow justify-end items-center`}>
        <ButtonChangeTheme tema={context.tema} alternarTema={context.alternarTema}/>
        <Avatar />
      </div>
    </div>
  )
}
