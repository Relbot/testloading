import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

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

export default async function GetInfo2({ params }: { params: { linie: string, checkliste: string } }) {

  const info = await getInfo()

  return (
    <Fragment>
      {
        info.map((i, index) => {
          return (
            <a key={index} href={`/${i}`}>{params.checkliste} {params.linie} {i}</a>
          )
        })
      }
    </Fragment>
  )
}
