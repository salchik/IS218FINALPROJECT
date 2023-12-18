import RestNav from "../components/RestNav";
import RestFooter from "../components/RestFooter";
import SignUpInput from "../components/SignUpInput";

export default function Reservation() {
    return (
        <div className="min-w-full min-h-full">
            <RestNav />
            <div className="relative w-full">
                <div className='align-middle justify-center' style={{
                    backgroundImage: `url("/signUpImage.svg")`,
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
                        SIGN UP
                    </h4>
                    <h1 className='text-6xl font-playfair my-5'>
                        JOIN THE CLUB
                    </h1>
                    <p>
                        Receive intimate details about our seasonal menus and limited-time culinary delights.
                        Not to mention gain early reservations for our enchanting themed dinners and intimate couple&apos;s events.
                    </p>
                    <SignUpInput />
                </div>
            </div>
            <RestFooter />
        </div>
    )
}