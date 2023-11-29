import Image from 'next/image'
import { useRouter } from 'next/navigation'
import TestButtonWithFetch from '../components/testButton'

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

  const info = await getInfo()

  
  return (
    <main className="flex flex-col">
      <div className='mb-3'>Next page with Link (<>a</>)</div>
      {
        info.map((i, index) => {
          return (
            <a key={index} href={`/${params.linie}/${i}`}>{params.linie} {i}</a>
          )
        })
      }

      <div className='mt-3'>Next page with Router.push</div>
      {
        info.map((i, index) => {
          return (
            <TestButtonWithFetch key={index} info={i}/>
          )
        })
      }
    </main>
  )
}
