import Link from 'next/link';
import React from 'react'
import { FaMicrophoneAlt } from "react-icons/fa";

type Props = {}

const Songs = (props: Props) => {
  return (
    <div className='bg-white shadow rounded'>
      <div className='px-4 py-2 border-b text-xl font-medium text-fuchsia-600 flex gap-1 w-full items-center'>
        <FaMicrophoneAlt />
        <h4>Artist</h4>
      </div>
      <div className='px-6 py-2 pb-6'>
        <h3 className='text-2xl pb-3'>Kx The Flow Butler</h3>
        <div className='flex flex-col gap-3 text-gray-600 text-md'>
          <p>I am Iniobong Sunday Titus, known professionally as Kx the Flow Butler, also known as Ispiritual and Lyrical Titan. I am a Gospel Rapper, Singer-Songwriter, and practicing Architect. I am also the organizer of Rap As God Culture and Ascension Event.</p>
          <p>Kx the Flow Butler is currently getting ready to release his new EP album titled "ASCENXION" on the 1st of August 2024, with the goal of reaching the top of the music industry in Nigeria.</p>
          <p>My music is heavily influenced by my surroundings, culture, and deeply rooted in the teachings of God. I am recognized for my inspiring melodies, energetic performance, and meaningful lyrics that seek to uplift my audience. I gained recognition when I released a popular single called "God I Serve" from my previous EP, Kabaka.</p>
        </div>
        <div className='flex flex-col gap-3 pt-6'>
          <div className='flex justify-between border-b gap-3 py-2 px-2'>
            <span className='text-gray-600 font-semibold'>Location: </span><span>Nigeria</span>
          </div>
          <div className='flex justify-between border-b gap-3 py-2 px-2'>
            <span className='text-gray-600 font-semibold'>Facebook: </span><span><Link href={"https://web.facebook.com/profile.php?id=100006187399095"} className='text-fuchsia-600'>@kxtheflowbutler</Link></span>
          </div>
          <div className='flex justify-between border-b gap-3 py-2 px-2'>
            <span className='text-gray-600 font-semibold'>Instagram: </span><span><Link href={"https://www.instagram.com/kxtheflowbutler/"} className='text-[#200080]'>@kxtheflowbutler</Link></span>
          </div>
          <div className='flex justify-between border-b gap-3 py-2 px-2'>
            <span className='text-gray-600 font-semibold'>TikTok: </span><span><Link href={"https://www.tiktok.com/@kxtheflowbutler"} className='text-fuchsia-600'>@kxtheflowbutler</Link></span>
          </div>
          <div className='flex justify-between border-b gap-3 py-2 px-2'>
            <span className='text-gray-600 font-semibold'>Twitter: </span><span><Link href={"https://x.com/kxtheflowbutler"}  className='text-[#200080]'>@kxtheflowbutler</Link></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Songs