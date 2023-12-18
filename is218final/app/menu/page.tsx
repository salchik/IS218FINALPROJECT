import { Button } from "@nextui-org/react";
import RestNav from "../components/RestNav";
import RestFooter from "../components/RestFooter";

export default function Menu() {
    return (
      <div className="min-w-screen min-h-screen">
        <RestNav/>
        <div className="relative w-full">
        <div className='align-middle justify-center' style={{
          backgroundImage: `url("/aboutImage.svg")`,
          backgroundSize: 'cover',
          backgroundPositionY: '70%',
          paddingBottom: '700px',
          width: '100%',
          opacity: '.6',

        }} />
      </div>
      <div className='w-full py-5' />
      <div className='w-full bg-white py-20 flex justify-center'>
        <div className='text-black flex flex-col text-center w-3/4 gap-y-10'>
          <h4 className=' font-playfair font-light'>
            DECEMBER COURSE 2023
          </h4>
          <h4 className=' font-roboto'>
            kINMEDAI, Shi so, Trout Roe
          </h4>
        </div>
      </div>
        <RestFooter/>
      </div>
    )
  }