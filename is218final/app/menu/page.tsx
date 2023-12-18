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
        <div className='text-black flex flex-col text-center w-3/4 gap-y-20 mb-56'>
          <h4 className=' font-playfair font-light'>
            DECEMBER COURSE 2023
          </h4>
          <h4 className='font-roboto, font-bold'>
            KINMEDAI, <span className=" font-light">Shi so, Trout Roe</span>
          </h4>
          <h4 className='font-roboto, font-bold'>
          ARTICHOKE, <span className=" font-light">Shitake, Truffle</span>
          </h4>
          <h4 className='font-roboto, font-bold'>
          CUTTLEFISH, <span className=" font-light">Leche de Tigre, Quinoa</span>
          </h4>
          <h4 className='font-roboto, font-bold'>
          MILK BREAD, <span className=" font-light">Smoked Tofu, Fonio</span>
          </h4>
          <h4 className='font-roboto, font-bold'>
          SCALLOP, <span className=" font-light">Saffron, Amaretto</span>
          </h4>
          <h4 className='font-roboto, font-bold'>
           CARROT, <span className=" font-light">Almond, Satsuma
           <br />
           <br /> 
           OR </span>
           <br />
           <br />
           WHITE TRUFFLE, <span className=" font-light">Ravioli, Potato, Albufera </span> +55
          </h4>
          <h4 className='font-roboto, font-bold'>
          MADAI, <span className=" font-light">Lentil, Soy</span>
          </h4>
          <h4 className='font-roboto, font-bold'>
          IBERICO PORK, <span className=" font-light">Eggplant, Plum, Chanterelles</span>
          </h4>
          <h4 className='font-roboto, font-bold'>
          36-MONTH COMTE CHEESE, <span className=" font-light">Honey, Truffle</span>
          </h4>
          <h4 className='font-roboto, font-bold'>
          CHOCOLATE, <span className=" font-light">Wasabi, Porcini</span>
          </h4>
        </div>
      </div>
        <RestFooter/>
      </div>
    )
  }