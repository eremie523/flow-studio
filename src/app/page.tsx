import Hero from '@/components/Hero'
import Songs from '@/components/Artist'
import Image from 'next/image'
import Albums from '@/components/Albums'
import News from '@/components/News'

export default function Home() {
  return (
    <main className='lg:mt-16 mt-12'>
      {/* <Hero></Hero> */}
      <section className='flex justify-start items-center bg-transparent py-8 bg-[aliceblue] lg:px-16 px-2 rounded-md'>
        <div className='flex lg:w-2/3 w-full flex-col lg:gap-8 gap-4'>
			<Songs />
			<Albums />
			<News />
		</div>
      </section>
    </main>
  )
}
