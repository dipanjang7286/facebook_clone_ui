import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Login from '../../components/Login'
import { getSession } from 'next-auth/react'
import Feed from '../../components/Feed'
import RightSideBar from '../../components/RightSideBar'

export default function Home ({ session })
{
  if (!session) return <Login></Login>;
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
      </Head>
      <Header></Header>
      <main className="flex bg-gray-100">
        {/* left */}
        <Sidebar></Sidebar>
        {/* feed */}
        <Feed></Feed>
        {/* right */}
        <RightSideBar></RightSideBar>
      </main>
    </div>

  )
}

export async function getServerSideProps (context)
{
  const session = await getSession(context)
  return {
    props: { session },
  }
}