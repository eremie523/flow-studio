import React from 'react'
import { BiSolidAlbum } from "react-icons/bi";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

type Props = {}

const Albums = (props: Props) => {
    return (
        <div className='bg-white shadow rounded' id='albums'>
            <div className='px-4 py-2 border-b text-xl font-medium text-fuchsia-600 flex gap-1 w-full items-center'>
                <BiSolidAlbum />
                <h4>Albums</h4>
            </div>
            <div className='lg:p-6 p-3 flex flex-col gap-3'>
                <Card className='flex lg:flex-row flex-col items-center'>
                    <CardHeader>
                        <Image src={"/assets/kabaka.jpeg"} alt='kabaka image' width={200} height={200} />
                    </CardHeader>
                    <CardContent className='flex flex-col justify-center'>
                        <CardTitle>Kabaka Album</CardTitle>
                        <CardDescription className='lg:text-xl text-md'>
                            <p>A playlist by Kx The Flow Butler</p>
                            <p>Am a Gospel Rapper, Singer, Songwriter, Soul Winner and a Practicing Architect</p>
                            <div className='flex justify-end mt-3'>
                                <Button size={"sm"} className='max-lg:w-full'><Link href={"https://audiomack.com/kx-theflowbutler/playlist/rap-jams"}>View Album</Link></Button>
                            </div>
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card className='flex lg:flex-row flex-col items-center'>
                    <CardHeader>
                        <Image src={"/assets/ascenxion.jpeg"} alt='kabaka image' width={200} height={200} />
                    </CardHeader>
                    <CardContent className='flex flex-col justify-center'>
                        <CardTitle> Ascenxion Ep</CardTitle>
                        <CardDescription className='lg:text-xl text-md'>
                            <p>Release Date: August 1, 2024 by Kx The Flow Butler</p>
                            <p>Am a Gospel Rapper, Singer, Songwriter, Soul Winner and a Practicing Architect</p>
                            <div className='flex justify-end mt-3'>
                                <Button size={"sm"} className='max-lg:w-full'><Link href={"https://audiomack.com/kx-theflowbutler/song/kx-eze"}>View Album</Link></Button>
                            </div>
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Albums