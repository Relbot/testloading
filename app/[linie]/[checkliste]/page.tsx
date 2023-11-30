import Image from 'next/image'
import Link from 'next/link'
import GetInfo2 from './GetInfo'
import { Suspense } from 'react'
import Loading from '@/app/loading'



export default async function Home({ params }: { params: { linie: string, checkliste: string } }) {


  return (
    <main className="flex flex-col">
      <a href={`/${params.linie}`}>back</a>
      <Suspense fallback={<Loading/>}>
        <GetInfo2 params={params}/>

      </Suspense>
    </main>
  )
}
