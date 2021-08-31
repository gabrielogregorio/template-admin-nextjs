import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'

interface AvatarProps {
  className?: string
}

export default function Avatar(props: AvatarProps) {
  const { usuario } = useAuth()
  return (
    <Link href="/perfil">
      <img className={`h-10 w-10 rounded-full cursor-pointer object-cover ml-3 ${props.className}`} src={usuario?.imageUrl ?? '/images/default.jpg'} alt="Avatar do usuário" />
    </Link>
  )
}