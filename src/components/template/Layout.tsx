import useAppData from "../../data/hook/useAppData";
import ForceAuth from "../auth/ForceAuth";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";


interface LayoutProps {
  titulo: string
  subtitulo: string
  children: any
}


export default function Layout(props: LayoutProps) {
  const { tema } = useAppData()
  return (
    <ForceAuth>
      <div className={`${tema} flex h-screen w-screen`}>
        <Sidebar />
        <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800`}>
          <Header titulo={props.titulo} subtitulo={props.subtitulo} />
          <Content>
            {props.children}
          </Content>
        </div>
      </div>
    </ForceAuth> 
  )
}
