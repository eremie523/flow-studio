import Image from 'next/image'
import React from 'react'
import { FaAngleLeft, FaAngleRight, FaPlay } from 'react-icons/fa6'
import { Button } from './ui/button'
import { Card, CardContent, CardTitle } from './ui/card'
import { FaDownload } from "react-icons/fa6"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Link from 'next/link'

type Props = {}

const Music = (props: Props) => {
    return (
        <div className='flex flex-col min-h-screen md:py-28 py-12 md:px-32 px-4 md:gap-6 gap-3' id='music'>
            <Carousel>
                <div className='flex gap-16 mb-6 items-center'>
                    <h3 className='text-3xl font-semibold'>Albums<span className='hidden md:inline'> and Medias</span></h3>
                    <div className='flex relative'>
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </div>
                <CarouselContent>
                    <CarouselItem>
                        <div className='flex md:flex-row flex-col bg-white w-full shadow'>
                            <div className='h-full bg-black p-4 flex items-center justify-center'>
                                <Image src={"/assets/ascenxion.jpeg"} alt='New upload' width={550} height={600} className='object-cover md:min-w-[550px]'></Image>
                            </div>
                            <div className='flex-grow md:p-6 p-4 flex flex-col gap-4'>
                                <h3 className='text-xl font-semibold underline'>Ascenxion EP</h3>
                                <ul className='flex gap-4 flex-col'>
                                    <Card>
                                        <CardContent className='p-3 flex justify-between items-center'>
                                            <div>
                                                <CardTitle className='text-lg font-normal'>Blood of Jesus</CardTitle>
                                            </div>
                                            <div className="flex flex-row gap-3">
                                                <FaPlay />
                                                <FaDownload />
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent className='p-3 flex justify-between items-center'>
                                            <div>
                                                <CardTitle className='text-lg font-normal'>Money For Jesus</CardTitle>
                                            </div>
                                            <div className="flex flex-row gap-3">
                                                <FaPlay />
                                                <FaDownload />
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent className='p-3 flex justify-between items-center'>
                                            <div>
                                                <CardTitle className='text-lg font-normal'>Allow Me</CardTitle>
                                            </div>
                                            <div className="flex flex-row gap-3">
                                                <FaPlay />
                                                <FaDownload />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ul>

                                <div className=''>
                                    <Button>View More</Button>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='flex md:flex-row flex-col bg-white w-full shadow'>
                            <div className='h-full bg-black p-4 flex items-center justify-center'>
                                <Image src={"/assets/kabaka.jpeg"} alt='New upload' width={550} height={600} className='object-cover md:min-w-[550px]'></Image>
                            </div>
                            <div className='flex-grow md:p-6 p-4 flex flex-col gap-4'>
                                <h3 className='text-xl font-semibold underline'>Kabaka Album</h3>
                                <ul className='flex gap-4 flex-col'>
                                    <Card>
                                        <CardContent className='p-3 flex justify-between items-center'>
                                            <div>
                                                <CardTitle className='text-lg font-normal'>Kabaka (Poetry)</CardTitle>
                                            </div>
                                            <div className="flex flex-row gap-3">
                                                <FaPlay />
                                                <FaDownload />
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent className='p-3 flex justify-between items-center'>
                                            <div>
                                                <CardTitle className='text-lg font-normal'>The GOD I Serve</CardTitle>
                                            </div>
                                            <div className="flex flex-row gap-3">
                                                <FaPlay />
                                                <FaDownload />
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent className='p-3 flex justify-between items-center'>
                                            <div>
                                                <CardTitle className='text-lg font-normal'>Man No Be GOD</CardTitle>
                                            </div>
                                            <div className="flex flex-row gap-3">
                                                <FaPlay />
                                                <FaDownload />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ul>

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

export default Music