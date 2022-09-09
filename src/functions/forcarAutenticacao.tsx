import Head from "../../node_modules/next/head"
import Image from "../../node_modules/next/image"
import Router from "../../node_modules/next/router"
import Loading from '../../public/images/loading.gif'
import useAuth from "../data/hook/useAuth"

export default function forcarAutenticacao(jsx) {

  const { usuario, carregando } = useAuth()

  function renderizarConteudo() {
    return (
      <>
      <Head>
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              if(!document.cookie?.includes("admin-template-udemy-auth")) {
                window.location.href = "/autenticacao"
              }
            `
          }}
        />
      </Head>
        {jsx}
      </>
    )
  }

  function renderizarCarregando() {
    return (
      <div className={`
       flex justify-center items-center h-screen
      `}>
        <Image src={Loading} />
      </div>
    )
  }
  
  if(!carregando && usuario?.email) {
    return renderizarConteudo()
  } else if (carregando) {
    return renderizarCarregando()
  } else {
    Router.push('/autenticacao')
    return null
  }
}