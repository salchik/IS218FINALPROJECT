'use client'
import { Button, Input } from '@nextui-org/react'
import { ChangeEvent, useState } from 'react'

const mailchimpFactory = require("@mailchimp/mailchimp_transactional/src/index.js");
const mailchimp = mailchimpFactory(process.env.MANDRIL_API_KEY);


export default function ReserveInput() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        guestAmount: ''
    });
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name , value } = e.currentTarget;
        setFormData({
            ...formData, [name]: value
        });
    }
    const subscribeUser = async (e: any) => {
        e.preventDefault()
        let response = 'default'
        try {
            // const response = await mailchimp.messages.send({
            //     message
            //   });
        }
        catch (e) {
            let response = e
        }

        // const res = fetch('/api',
        //     {
        //         body: JSON.stringify({
        //             //inputRef.current.value
        //             'input_email': testData
        //         }),

        //         headers: {
        //             'Content-Type': 'application/json',
        //         },

        //         method: 'POST',
        //     });
    };
    return (
        <div className="w-2/4 mt-10">
            <div className="flex flex-row gap-3">
                <Input id='firstName' className="w-6/12" type="text" onChange={handleInputChange} label={'Your First Name'} />
                <Input id='firstName' className="w-6/12" type="text" onChange={handleInputChange} label={'Your Last Name'} />
            </div>
            <Input id='firstName' className="w-full mt-10" type="email" onChange={handleInputChange} label={'Your Email'} />
            <Input id='firstName' className="w-full mt-10" type="number" onChange={handleInputChange} label={'Amount of Guests'} />
            <Button color='secondary' className=' w-full text-2xl my-14 font-roboto font-light bg-black py-7 rounded-lg' onClick={subscribeUser}>
                RESERVE
            </Button>
        </div>
    )
}