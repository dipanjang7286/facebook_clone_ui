import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

export default function Home ()
{
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
      </Head>
      <Header></Header>
      <main className="flex bg-gray-100">
          <Sidebar></Sidebar>
      </main>
    </div>
    
  )
}
