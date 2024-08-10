import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { BiSolidAlbum } from 'react-icons/bi'
import Link from 'next/link'

type Props = {}

const News = (props: Props) => {
    return (
        <div id='news'>
            <div className='bg-white shadow rounded'>
                <div className='px-4 py-2 border-b text-xl font-medium text-fuchsia-600 flex gap-1 w-full items-center'>
                    <BiSolidAlbum />
                    <h4>News</h4>
                </div>
                <div className='lg:p-6 p-3 flex flex-col gap-3'>
                    <Card className=''>
                        <CardContent className='max-lg:p-3 py-5 flex flex-col justify-center'>
                            <CardTitle className='max-lg:text-lg mb-3'>BREAKING NEWS ON TIDE NEWSPAPERS 📰 </CardTitle>
                            <CardDescription className='lg:text-lg text-md'>
                                <p>A playlist by Kx The Flow Butler</p>
                                <p>Kx The Flow Butler drops this new Ep Ascenxion Ep on tide newspapers. <br /> Let's stream and share this great gift to humanity.</p>
                                <div className='flex justify-end mt-3'>
                                    <Button size={"sm"} className='max-lg:w-full'><Link href={"https://www.thetidenewsonline.com/2024/08/09/kx-the-flow-butler-drops-new-ep-ascenxion/"} className='text-fuchsia-600'>Read More</Link></Button>
                                </div>
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default News