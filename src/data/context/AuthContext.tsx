import firebase from '../../firebase/config'
import { createContext, useState } from 'react'
import Usuario from '../../model/Usuario'
import router from 'next/router'


interface AuthContextProps{
  usuario?: Usuario
  loginGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({}) 

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
  const token = await usuarioFirebase.getIdToken()
  return {
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName,
    email: usuarioFirebase.email,
    token,
    provedor: usuarioFirebase.providerData[0].providerId,
    imageUrl: usuarioFirebase.photoURL
  }
}

export function AuthProvider(props) {
  const [usuario, setUsuario] = useState<Usuario>(null)

  async function loginGoogle() {
    const resp = await firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )

    // Email Válido
    if (resp.user?.email) {
      const user =  await usuarioNormalizado(resp.user)
      setUsuario(user)
      router.push('/')  
    }
  }

  return (
    <AuthContext.Provider value={{usuario, loginGoogle}} >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext