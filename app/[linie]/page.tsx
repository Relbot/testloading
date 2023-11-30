import Image from 'next/image'
import { useRouter } from 'next/navigation'
import TestButtonWithFetch from '../../components/testButton'
import GetInfo from './GetInfo'
import { Suspense } from 'react'
import Loading from '../loading'

const getInfo =  async () => {
  await new Promise(resolve => setTimeout(resolve, 3000))

  return [
    "PTest1",
    "PTest2",
    "PTest3",
    "PTest4",
    "PTest5",
    "PTest6",
   
  ]
}

export default async function Home({ params }: { params: { linie: string } }) {


  
  return (
    <main className="flex flex-col">
      

      <div className='mt-3'>Next page with Router.push</div>
      <Suspense fallback={<Loading/>}>
        <GetInfo params={params}/>

      </Suspense>
    </main>
  )
}
