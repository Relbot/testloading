import Image from 'next/image'
import TestButtonWithFetch from './components/testButton'


const getInfo =  async () => {
  await new Promise(resolve => setTimeout(resolve, 1500))

  return [
    "Test1",
    "Test2",
  ]
}

export default async function Home() {

  const info = await getInfo()

  return (
    <main className="flex flex-col">
      {
        info.map((i, index) => {
          return (
            <a key={index} href={`/${i}`}>{i}</a>
          )
        })
      }
    </main>
  )
}
