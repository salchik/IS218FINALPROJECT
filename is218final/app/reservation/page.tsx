import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import RestNav from "../components/RestNav";
import RestFooter from "../components/RestFooter";

const selectGuests = [{ label: '1', value: "1" },
{ label: '2', value: "2" },
{ label: '3', value: "3" },
{ label: '4', value: "4" },
{ label: '5', value: "5" },
{ label: '6', value: "6" },
{ label: '7', value: "7" },
{ label: '8', value: "8" },
{ label: '9', value: "9" },]

export default function Reservation() {
    return (
        <div className="min-w-full min-h-full">
            <RestNav />
            <div className="relative w-full">
                <div className='align-middle justify-center' style={{
                    backgroundImage: `url("/reserveImage.svg")`,
                    backgroundSize: 'cover',
                    backgroundPositionY: '70%',
                    paddingBottom: '700px',
                    width: '100%',
                    opacity: '.6',

                }} />
            </div>
            <div className='w-full py-5' />
            <div className='w-full bg-white py-20 flex justify-center'>
                <div className='text-black flex flex-col text-left w-3/4'>
                    <h4 className=' font-roboto font-semibold'>
                        MAKE A
                    </h4>
                    <h1 className='text-6xl font-playfair my-5'>
                        RESERVATION
                    </h1>
                    <p>
                        Walk-Ins allowed, but it is highly recommended to make a reservation at Amour de Mer. <br /> <br />
                        For any concerns, please contact at <br /><br />+1 (609) 555-6789 <br /> reservations@amourdemer.com
                    </p>
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
                </div>
            </div>
            <RestFooter />
        </div>
    )
}