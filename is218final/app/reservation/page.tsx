import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from "@nextui-org/react";
import RestNav from "../components/RestNav";
import RestFooter from "../components/RestFooter";

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
            <div className='w-full bg-white py-40 flex justify-center'>
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
                    <div className="w-2/3">
                        <div className="w-full flex-row">
                            <Input className="w-4/12" type="text" label={'Your First Name'} />
                            <Input className="w-4/12" type="text" label={'Your Last Name'} />
                        </div>
                        <Input className="w-5/12" type="email" label={'Your Email'} />
                        <Dropdown>
                            <DropdownTrigger>
                                <Button className=" bg-buttonRed"
                                    variant="solid"
                                >
                                    SELECT PARTY SIZE 
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem key="1">1</DropdownItem>
                                <DropdownItem key="2">2</DropdownItem>
                                <DropdownItem key="3">3</DropdownItem>
                                <DropdownItem key="4">4</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <RestFooter />
        </div>
    )
}