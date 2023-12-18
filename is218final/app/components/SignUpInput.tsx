'use client'
import { Button, Input } from '@nextui-org/react'
import { ChangeEvent, useState } from 'react'

export default function ReserveInput() {
    const [formData, setFormData] = useState({
        email: ''
    });
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name , value } = e.currentTarget;
        setFormData({
            ...formData, [name]: value
        });
    }
    const subscribeUser = async (e: any) => {
        e.preventDefault()
        const res = fetch('/api',
            {
                body: JSON.stringify({
                    'input_email': formData.email
                }),

                headers: {
                    'Content-Type': 'application/json',
                },

                method: 'POST',
            });
        console.log((await res).status)
    };
    return (
        <div className="w-2/4 mt-10">
            <div className="flex flex-row gap-3">
                <Input name='firstName' className="w-6/12" type="text" onChange={handleInputChange} label={'Your First Name'} />
                <Input name='lastName' className="w-6/12" type="text" onChange={handleInputChange} label={'Your Last Name'} />
            </div>
            <Input name='email' className="w-full mt-10" type="email" onChange={handleInputChange} label={'Your Email'} />
            <Button color='secondary' className=' w-full text-2xl my-14 font-roboto font-light bg-black py-7 rounded-lg' onClick={subscribeUser}>
                SIGN UP
            </Button>
        </div>
    )
}