import loading from '../../../public/images/loading.gif'
import Image from 'next/image'
import useAuth from '../../data/hook/useAuth'
import router from 'next/router'
import ScreensNames from '../util/ScreensNames'


export default function ForceAuth(props) {
  const { usuario, carregando } = useAuth()
  function renderContent() {
    return (
      <> 
        {props.children}
      </>
    )  
  }

  function renderLoading() {
    return (
      <div className={`flex justify-center items-center h-screen`}>
        <Image src={loading} />
      </div>
    )
  }

  if(!carregando && usuario?.email) {
    return renderContent()
  } else if(carregando) {
    return renderLoading()
  } else {
    router.push(ScreensNames.Authentication)
    return null
  }
}
