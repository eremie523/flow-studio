import { Playfair_Display, Playpen_Sans } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

type Props = {}

const playfair = Playfair_Display({weight: ["400", "500", "600"], subsets: ["latin"]})

const Hero = (props: Props) => {
  return (
    <section className='w-screen h-screen heroBgImage relative flex items-center justify-center'>
        <div className='relative z-10 text-center'>
            <h3 className={`text-8xl text-fuchsia-600 ${playfair.className}`}>Kx The Flow Buttler</h3>
            <p className='text-3xl bg-[#200080] text-white py-2 rounded-md shadow font-semibold'>Feel The Rhythm</p>
        </div>
        <Image src={"/assets/kx-image.jpg"} width={500} height={500} alt='kx' className='absolute bottom-0 end-0 rounded-tl-xl shadow'>

        </Image>
    </section>
  )
}

export default Hero