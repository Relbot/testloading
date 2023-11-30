'use client'

import { useParams, useRouter } from "next/navigation";
import { Fragment } from "react";

export type testButtonProps = {
    info: string
}

export default function TestButtonWithFetch(props: testButtonProps) {

    const router = useRouter()
    const params = useParams()

    return (
        <Fragment>
           
            <button onClick={async () => {
                const response = await fetch('https://api.apis.guru/v2/list.json');
            
                if (response.ok) {
                    
                    router.push(`/${params.linie}/${props.info}`)
                    console.log('Upload successful:');
                } else {
                    console.error('Upload failed:', response.statusText);
                }


              //router.push(`/${params.linie}/${props.info}`)
            }}>{params.linie} {props.info}</button>
         
      
        </Fragment>
    )
}