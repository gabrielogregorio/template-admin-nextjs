import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'
import ScreensNames from './ScreensNames'

interface AvatarProps {
  className?: string
}


export default function Avatar(props: AvatarProps) {
  const { usuario } = useAuth()

  return (
    <Link href={ScreensNames.Profile}>
      <img
        className={`h-10 w-10 rounded-full cursor-pointer object-cover ml-3 ${props.className}`}
        src={usuario?.imageUrl ?? '/images/default.jpg'}
        alt="Avatar do usuário" />
    </Link>
  )
}
