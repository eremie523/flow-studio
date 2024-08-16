"use client"
import { Playfair_Display, Playpen_Sans } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { FaArrowDown } from 'react-icons/fa6'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

type Props = {}

const playfair = Playfair_Display({ weight: ["400", "500", "600"], subsets: ["latin"] });

const Hero = (props: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <section className='lg:w-full flex lg:flex-row flex-col justify-center lg:items-start items-center lg:h-screen lg:mt-32 gap-4 relative'>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container lg:w-[550px] w-[480px]">
          <div className="embla__slide w-full">
            <div>
              <Image src={"/assets/s3.jpg"} alt='kx-image' width={550} height={600} className="w-full h-full object-cover"></Image>
            </div>
          </div>
          <div className="embla__slide w-full">
            <div>
              <Image src={"/assets/n2.jpg"} alt='kx-image' width={550} height={600} className="w-full h-full object-cover"></Image>
            </div>
          </div>
          <div className="embla__slide w-full">
            <div>
              <Image src={"/assets/s1.jpg"} alt='kx-image' width={550} height={600} className="w-full h-full object-cover"></Image>
            </div>
          </div>
        </div>
      </div>
      <div className='max-lg:absolute bottom-0 max-lg:px-3 pb-3'>
        <div className='bg-white flex flex-col lg:gap-y-6 gap-y-3 lg:p-5 p-3 max-w-[450px] shadow'>
          <div className="flex flex-row gap-2">
            <FaArrowDown></FaArrowDown>
            <FaArrowDown></FaArrowDown>
          </div>
          <div>
            <p className='max-lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quos sint asperiores facere corporis blanditiis, ipsam corrupti repudiandae assumenda obcaecati?</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero