import Hero from '@/components/Hero'
import Songs from '@/components/Artist'
import Image from 'next/image'
import Albums from '@/components/Albums'
import News from '@/components/News'
import Music from '@/components/Music'
import ShowReel from '@/components/ShowReel'

export default function Home() {
  return (
    <main className='lg:mt-16 bg-slate-50'>
			<Hero />
			<News />
      <Music />
      <ShowReel />
    </main>
  )
}
