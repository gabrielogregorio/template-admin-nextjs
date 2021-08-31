interface AutenticacaoEntradaProps {
  label: string
  value: any
  type?: 'text' | 'email' | 'password'
  require?: boolean
  onChange: (newValue: any) => void
}

export default function AutenticacaoEntrada(props: AutenticacaoEntradaProps) {
  return (
    <div className={`flex flex-col mt-4`}>

      <label htmlFor="">{props.label}</label>
      <input
        type={props.type}
        value={props.value ?? 'text'}
        onChange={e => props.onChange?.(e.target.value)}
        required={props.require}
        className={`px-4 py-3 rounded-lg bg-gray-200 mt-1
        border focus:border-blue-500
        focus:outline-none focus:bg-white`}
        />
    </div>
  )
}