'use client'
import { Button, Input } from '@nextui-org/react'
import { useRef } from 'react'

export default function ReserveInput() {
    const inputRef = useRef(null)
    const subscribeUser = async (e: any) => {
        e.preventDefault()

        const res = fetch('/api')
    } 
    return (
        <div className="w-2/4 mt-10">
        <div className="flex flex-row gap-3">
            <Input className="w-6/12" type="text" label={'Your First Name'} />
            <Input className="w-6/12" type="text" label={'Your Last Name'} />
        </div>
        <Input className="w-full mt-10" type="email" label={'Your Email'} />
        <Input className="w-full mt-10" type="text" label={'Amount of Guests'} />
        <Button color='secondary' className=' w-full text-2xl my-14 font-roboto font-light bg-black py-7 rounded-lg'>
            RESERVE
        </Button>
    </div>
      )
}