import { Button } from "@nextui-org/react";
import RestNav from "../components/RestNav";
import RestFooter from "../components/RestFooter";

export default function About() {
  return (
    <div className="min-w-screen min-h-screen">
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
            DISCOVER
          </h4>
          <h1 className='text-6xl font-playfair my-5'>
            THE STORY OF <br /> <br /> AMOUR DE MER
          </h1>
          <div className="flex gap-5 my-10">
            <p className="w-1/2">
              "Set against the backdrop of our vibrant coastal town, 'Amour de Mer' emerges as an ode to the ocean's wonders and the artistry of fine dining.
              <br /><br />
              Our story is rooted in a deep reverence for the sea, where every wave's whisper and every tide's rhythm inspired the creation of a culinary sanctuary. Founded by a team impassioned by seafood's allure, our restaurant is a testament to the fusion of passion and craft.
              <br /><br />
              From the break of dawn, our journey begins—forging partnerships with local fishermen dedicated to sustainability and the pursuit of the sea's finest treasures.
              <br /><br />
              Each day, our kitchen becomes a canvas for culinary magic, as our chefs weave their expertise and creativity into a menu designed to enchant the senses. Delicate scallop ceviche, succulent grilled lobster, each dish tells a story of devotion to flavor, tradition, and innovation
            </p>
            <p className="w-1/2">
              But 'Amour de Mer' isn't merely a restaurant; it's a symphony of flavors harmonized with an ambiance that invites lovers to savor intimate moments.
              <br /><br />
              Our dedication to excellence and the delicate balance of flavors mirrors the intricacies of love, crafting an atmosphere where connections deepen and memories are woven.
              <br /><br />
              With every reservation, every finely crafted dish, 'Amour de Mer' scripts a tale—a narrative of passion, dedication, and an unwavering commitment to crafting unforgettable dining experiences. Join us in this journey, where every bite is an exploration of the sea's treasures and a celebration of love's essence."
            </p>
          </div>
        </div>
      </div>
      <RestFooter />
    </div>
  )
}