import Image from 'next/image'


const getInfo =  async () => {
  await new Promise(resolve => setTimeout(resolve, 1500))

  return [
    "Test1",
    "Test2",
  ]
}

export default async function GetData({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  var info = await getInfo()


  const filter = searchParams?.filter

  if (filter) {
    info = info.filter(i => i === filter)
  }
  
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
