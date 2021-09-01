import { useState } from 'react'
import AuthInputProps from '../components/auth/AuthInputProps'
import ProfileImage from '../components/util/ProfileImage'
import ErrorMessage from '../components/util/ErrorMensage'
import useAuth from '../data/hook/useAuth'
import Button from '../components/util/Button'


export default function autenticacao() {
  const {login, cadastrar, loginGoogle} = useAuth()
  const [email, setEmail] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
  const [erro, setErro] = useState<string>('')
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')

  async function submeter() {
    try {
      if (modo == 'login') { await login(email, senha)}
      else { await cadastrar(email, senha) }  
    } catch(e) {
      showError(e?.message)
    }
  }

  function showError(msg, seconds = 5) {
    setErro(msg)
    setTimeout(() => setErro(null), seconds * 1000)
  }

  // hidden md:block w-full => a partir de um dispositivo médio, exibe a imagem (block)
  return (
    <div className={`flex h-screen items-center justify-center`}>
      <ProfileImage src="/images/bg.jpg" alt="Imagem da tela de autenticação" />

      <div className={` m-10 w-full md:w-1/2 lg:w-1/3`}>
        <h1 className={`text-2xl font-bold mb-5`}>
          {modo === 'login' ? 'Faça Login' : 'Crie uma conta'}
        </h1>

        {erro ? <ErrorMessage msg={erro} /> : (false)}

        <AuthInputProps label="E-mail" value={email} type="email" onChange={setEmail}/>
        <AuthInputProps label="Senha" value={senha} type="password" onChange={setSenha}/>

        
        <Button action={submeter} className={`bg-indigo-500 hover:bg-indigo-400`} text={modo === 'login' ? 'Entrar' : 'Cadastrar'} />

        <hr className={`my-6 border-gray-300 w-full`} />

        <Button action={loginGoogle} className={`bg-red-500 hover:bg-red-400`} text={modo === 'login' ? 'Entrar Com o Google' : 'Cadastrar com o Google'}/>

        {modo === 'login' ? (
          <p className={`mt-8`}>
            É novo na plataforma? 
            <a onClick={() => setModo('cadastro')} className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}> Criar Conta</a>
          </p>
        ) : (
          <p className={`mt-8`}>
            Já tem uma conta? 
            <a onClick={() => setModo('login')} className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}> Fazer Login</a>
          </p>
        )}
      </div> 
    </div>

  )
}