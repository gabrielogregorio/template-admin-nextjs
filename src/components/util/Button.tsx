interface ButtonProps {
  action: () => void
  className?: string
  text: string
}


export default function Button(props: ButtonProps) {
  return (
    <button onClick={props.action} className={`w-full text-white rounded-lg px-4 py-3 mt-6 ${props.className}`}>
      {props.text}
    </button>
  )
}
