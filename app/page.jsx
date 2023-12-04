import TopicList from '@/components/TopicList'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/topics/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function Home() {
  const sessoin = await getServerSession(authOptions)

  if (!session) {
    redirect('/singIn')
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Recent News</h1>
      <p>MongoDB CRUD example</p>
      <p>Next-auth 인증</p>
      <TopicList />
    </div>
  )
}
