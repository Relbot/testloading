import Image from 'next/image'
import { useRouter } from 'next/navigation'
import TestButtonWithFetch from '../../components/testButton'
import { Fragment } from 'react'

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

export default async function GetInfo({ params }: { params: { linie: string } }) {

  const info = await getInfo()

  
  return (
    <Fragment>
      
      {
        info.map((i, index) => {
          return (
            <TestButtonWithFetch key={index} info={i}/>
          )
        })
      }
    </Fragment>
  )
}
