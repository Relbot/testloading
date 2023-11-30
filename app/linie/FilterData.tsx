'use client'

import { useRouter } from "next/navigation"
import { startTransition, useState } from "react"




export default async function FilterData() {

  const router = useRouter()


  const props: string[] = [
    "Test1",
    "Test2",
  ]

  return (
    <main className="flex flex-row">
        <button onClick={() => {
          startTransition(() => {
            router.replace("/linie?filter=Test1")
          })
        }}>
          filterTest
        </button>
    </main>
  )
}
