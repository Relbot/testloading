import Image from 'next/image'
import FilterData from './FilterData'
import GetData from './GetData'
import { Suspense } from 'react'
import Loading from '../loading'

export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {


  return (
    <main className="flex flex-col">
      <FilterData/>
      <Suspense fallback={<Loading/>}>
        <GetData params={params} searchParams={searchParams}/>
      </Suspense>
    </main>
  )
}
