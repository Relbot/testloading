import Image from 'next/image'
import Link from 'next/link'

const getInfo =  async () => {
  await new Promise(resolve => setTimeout(resolve, 3000))

  return [
    "Tesuzfuzfuzt1",
    "rzh4h",
    "h",
    "657u6",
    "5h5",
    "h45hr",
 
  ]
}

export default async function Home({ params }: { params: { linie: string, checkliste: string } }) {

  const info = await getInfo()

  return (
    <main className="flex flex-col">
      <a href={`/${params.linie}`}>back</a>
      {
        info.map((i, index) => {
          return (
            <a key={index} href={`/${i}`}>{params.checkliste} {params.linie} {i}</a>
          )
        })
      }
    </main>
  )
}
