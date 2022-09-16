import Link from "../../../node_modules/next/link";
import Image from "../../../node_modules/next/image";
import useAuth from "../../data/hook/useAuth";

interface AvatarUsuarioProps {
  className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
  const { usuario } = useAuth()
  return (
    <Link href="/perfil">
      <Image 
        // src={usuario?.imagemUrl ?? '/images/avatar.svg'} 
        src='/images/avatar.svg'
        alt="Avatar do Usuário" 
        width="40"
        height="40"
        className={`
          h-10 w-10 rounded-full cursor-pointer
          ${props.className}
        `}
      />
    </Link>
  )
}