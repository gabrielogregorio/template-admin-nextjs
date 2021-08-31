interface ImagemAutenticacaoProps {
  src: string
  alt: string
}

export default function ImagemAutenticacao(props: ImagemAutenticacaoProps) {
  return (
    <div className={`hidden md:block md:w-full lg:w-2/3`}>
      <img src={props.src} alt={props.alt} className={`w-full h-screen object-cover`}/>
    </div>
  )
}