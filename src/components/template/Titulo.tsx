interface TituloProps {
  titulo: string
  subtitulo: string
}

export default function Titulo(props: TituloProps) {
  return (
    <div>
      <h1 className={`font-black text-3xl text-gray-900`}>{props.titulo}</h1>
      <h2 className={`font-normal text-base text-gray-600`}>{props.subtitulo}</h2>
    </div>
  )
}