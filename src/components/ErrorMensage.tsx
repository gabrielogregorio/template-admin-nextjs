import { IconError } from "./Icones";

interface ErrorMessageProps {
  msg: string
}

export default function ErrorMessage(props: ErrorMessageProps) {
  return (
    <div className={`
      flex items-center
      bg-red-400 text-white border-red-700
       py-3 px-5 my-2 border rounded-lg 
    `}>
      {IconError()}
      <span className={`ml-3`}>{props.msg}</span>
    </div>
  )
}