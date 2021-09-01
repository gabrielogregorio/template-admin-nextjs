import firebase from '../../firebase/config'
import { createContext, useState } from 'react'
import Usuario from '../../model/Usuario'
import router from 'next/router'
import Cookies from 'js-cookie'
import { useEffect } from 'react'


interface AuthContextProps{
  usuario?: Usuario
  loginGoogle?: () => Promise<void>
  login?: (email: string, senha: string) => Promise<void>
  cadastrar?: (email: string, senha: string) => Promise<void>
  carregando?: boolean
  logout?: () => Promise<void>
}


const AuthContext = createContext<AuthContextProps>({}) 


async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
  const token = await usuarioFirebase.getIdToken()
  return {
    token,
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName,
    email: usuarioFirebase.email,
    provedor: usuarioFirebase.providerData[0].providerId,
    imageUrl: usuarioFirebase.photoURL
  }
}

function gerenciarCokie(logado) {
  if(logado) {
    Cookies.set('admin-cod3r-auth', logado, {
      expires: 7 // 7 dias para expirar
    })
  } else {
    Cookies.remove('admin-cod3r-auth')
  }
}


export function AuthProvider(props) {
  const [usuario, setUsuario] = useState<Usuario>(null)
  const [carregando, setCarregando] = useState(true)

  async function configurarSecao(usuarioFirebase) {
    if(usuarioFirebase?.email) {
      const user = await usuarioNormalizado(usuarioFirebase)
      setUsuario(user)
      gerenciarCokie(true)
      setCarregando(false)
      return user.email
    } else {
      setUsuario(null)
      gerenciarCokie(false)
      setCarregando(false)
      return false
    }
  }

  async function loginGoogle() {
    try {
      setCarregando(true)
      const resp = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
      await configurarSecao(resp.user)
      router.push('/')    
    } finally {
      setCarregando(false)
    }
  }


  async function login(email, senha) {
    try {
      setCarregando(true)
      const resp = await firebase.auth()
        .signInWithEmailAndPassword(email, senha)
      await configurarSecao(resp.user)
      router.push('/')    
    } finally {
      setCarregando(false)
    }
  }


  async function cadastrar(email, senha) {
    try {
      setCarregando(true)
      const resp = await firebase.auth()
        .createUserWithEmailAndPassword(email, senha)
      await configurarSecao(resp.user)
      router.push('/')    
    } finally {
      setCarregando(false)
    }
  }


  async function logout() {
    try {
      setCarregando(true)
      await firebase.auth().signOut()  
      await configurarSecao(null)
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    // Usuário já se logou
    if(Cookies.get('admin-cod3r-auth')) {
      // Detecta quando o token do usuário for alterado
      // This is a Observer
      const cancelarObserve = firebase.auth().onIdTokenChanged(configurarSecao)
      // Quando o componente for desmontado, essa função será chamada automaticamente
      return () => cancelarObserve()
    } else {
      setCarregando(false)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
        usuario,
        loginGoogle,
        logout,
        login,
        cadastrar,
        carregando
        }}>
      {props.children}
    </AuthContext.Provider>
  )
}


export default AuthContext
