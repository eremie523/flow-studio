import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { BiSolidAlbum } from 'react-icons/bi'
import Link from 'next/link'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Image from 'next/image'
import { FaDownload, FaPlay } from 'react-icons/fa6'

type Props = {}

const News = (props: Props) => {
  return (
    <div className='flex flex-col min-h-screen md:py-28 py-12 md:px-32 px-4 md:gap-6 gap-3' id='news'>
      <Carousel>
        <div className='flex gap-16 mb-6 items-center'>
          <h3 className='text-3xl font-semibold'>News<span className='hidden md:inline'> in Flow Studio</span></h3>
          <div className='flex relative'>
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        <CarouselContent>
          <CarouselItem>
            <div className='flex flex-col bg-white w-full shadow-lg'>
              <div className='h-full bg-black p-4 flex items-center justify-center'>
                <Image src={"/assets/kx-image.jpg"} alt='New upload' width={550} height={600} className='object-cover md:min-w-[550px]'></Image>
              </div>
              <div className='flex-grow md:p-6 p-4 flex flex-col gap-4'>
                <h3 className='text-2xl font-semibold'>Recently Released On Tide News</h3>
                <p className='text-lg text-slate-600'>
                  An Akwa lbom born gospel artiste, Iniobong Sunday Titus, popularly known as Kx The Flow Butler has released a new album titled ‘ASCENXION’. <br />
                  The hit album, since it’s release has witnessed a good number of listeners and download from its various music platforms across the federation with possible reactions from his fans. <br />
                  Flow Butler, who is also a practising architect professionally, gospel rapper and a singer-song writer has released his new EP album with an aim of reaching the top of the music industry in Nigeria. <br />
                </p>
                <div className=''>
                  <Link href={"https://audiomack.com/kx-theflowbutler/playlist/rap-jams"}><Button>View More</Button></Link>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className='flex flex-col bg-white w-full shadow-lg'>
              <div className='h-full bg-black p-4 flex items-center justify-center'>
                <Image src={"/assets/n2.jpg"} alt='New upload' width={550} height={600} className='object-cover md:min-w-[550px]'></Image>
              </div>
              <div className='flex-grow md:p-6 p-4 flex flex-col gap-4'>
                <h3 className='text-2xl font-semibold'>The First Ascenxion Merch</h3>
                <p className='text-lg text-slate-600'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dignissimos molestiae. Excepturi, vitae laudantium? Provident quod atque consectetur deserunt, aliquid esse laudantium tenetur quia velit illum. Adipisci vitae tenetur quibusdam.
                </p>
                <div className=''>
                  <Link href={"https://audiomack.com/kx-theflowbutler/playlist/rap-jams"}><Button>View More</Button></Link>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default News