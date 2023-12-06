import Image from 'next/image'
import {Button} from '@nextui-org/button'; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
            <div>
            <Button>Click me</Button>
            </div>
    </main>
  )
}
