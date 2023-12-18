'use client'
import { Button, Input } from '@nextui-org/react'
import { ChangeEvent, useState } from 'react'

const MANDRIL_API = process.env.NEXT_PUBLIC_MANDRIL_API_KEY;
const mailchimp = require('@mailchimp/mailchimp_transactional')(`${MANDRIL_API}`);

export default function ReserveInput() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        guestNum: ''
    });
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name , value } = e.currentTarget;
        setFormData({
            ...formData, [name]: value
        });
    }
    const subscribeUser = async (e: any) => {
        e.preventDefault()
        const message = {
            
            from_email: "sc399@njit.edu",
            subject: "Reservation",
            text: "Hello " + formData.firstName + " " + formData.lastName + " your reservation is set for " + formData.guestNum,
            to: [
              {
                email: formData.email,
                type: "to"
              }
            ]
          };
        try {
            const response = await mailchimp.messages.send({
                message
            });
           console.log(response.status)
        }
        catch (e) {
            console.log(e)
        }
    };
    return (
        <div className="w-2/4 mt-10">
            <div className="flex flex-row gap-3">
                <Input name='firstName' className="w-6/12" type="text" onChange={handleInputChange} label={'Your First Name'} />
                <Input name='lastName' className="w-6/12" type="text" onChange={handleInputChange} label={'Your Last Name'} />
            </div>
            <Input name='email' className="w-full mt-10" type="email" onChange={handleInputChange} label={'Your Email'} />
            <Input name='guestNum' className="w-full mt-10" type="number" onChange={handleInputChange} label={'Amount of Guests'} />
            <Button color='secondary' className=' w-full text-2xl my-14 font-roboto font-light bg-black py-7 rounded-lg' onClick={subscribeUser}>
                RESERVE
            </Button>
        </div>
    )
}