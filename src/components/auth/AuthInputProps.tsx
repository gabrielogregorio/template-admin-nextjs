interface AuthInputProps {
  label: string
  value: any
  require?: boolean
  type?: 'text' | 'email' | 'password'
  onChange: (newValue: any) => void
}


export default function AuthInput(props: AuthInputProps) {
  return (
    <div className={`flex flex-col mt-4`}>
      <label>{props.label}</label>
      <input
        type={props.type} value={props.value ?? 'text'} required={props.require}
        onChange={e => props.onChange?.(e.target.value)}
        className={`
          px-4 py-3 rounded-lg mt-1 border focus:outline-none
          bg-gray-200 focus:border-blue-500 focus:bg-white`}
        />
    </div>
  )
}
