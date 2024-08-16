import React from 'react'
import { FaMusic } from "react-icons/fa6";
import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

type Props = {}
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600"] });

const NavBar = (props: Props) => {

    return (
        <nav className="fixed top-0 w-screen p-0 z-10">
            <div className='w-full shadow bg-white/90 backdrop-blur-sm py-5 lg:px-12 lg:flex hidden justify-between items-center'>
                <div>
                    <Link href={"/"} className='flex gap-3 items-center'>
                        <Image src={"/assets/logo.jpg"} alt={"logo"} width={50} height={50} className='shadow-lg border-2 border-white rounded'></Image>
                        <h3 className={`text-2xl font-mono font-semibold ${playfair.className}`}>KX THE FLOW</h3>
                    </Link>
                </div>
                <ul className='flex font-semibold'>
                    <li>
                        <Link href={"/#news"}>
                            <Button variant={"link"} size={"lg"} className='font-semibold'>News</Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/#music"}>
                            <Button variant={"link"} size={"lg"} className='font-semibold'>Music</Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/#showreel"}>
                            <Button variant={"link"} size={"lg"} className='font-semibold'>ShowReel</Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/#contact"}>
                            <Button variant={"default"} size={"lg"} className='font-semibold'>Contact Us</Button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='p-3 lg:hidden flex'>
                <Sheet>
                    <SheetTrigger>
                        <Image src={"/assets/logo.jpg"} alt={"logo"} width={50} height={50} className='shadow-lg border-2 border-white rounded'></Image>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className='border-b-1'>
                                <Link href={"/"} className='flex gap-3 items-center'>
                                    <Image src={"/assets/logo.jpg"} alt={"logo"} width={40} height={40} className='rounded'></Image>
                                    <h3 className={`text-xl font-mono font-semibold ${playfair.className}`}>KX THE FLOW</h3>
                                </Link>
                            </SheetTitle>
                            <SheetDescription>
                                <ul className='flex flex-col gap-4 mt-6 text-left w-full font-semibold'>
                                    <li>
                                        <Link href={"/#news"}>
                                            <Button variant={"link"} size={"lg"} className='font-semibold w-full border-b rounded-none'>News</Button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"/#music"}>
                                            <Button variant={"link"} size={"lg"} className='font-semibold w-full border-b rounded-none'>Music</Button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"/#showreel"}>
                                            <Button variant={"link"} size={"lg"} className='font-semibold w-full border-b rounded-none'>ShowReel</Button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"/#contact"}>
                                            <Button variant={"default"} size={"lg"} className='font-semibold w-full'>Contact Us</Button>
                                        </Link>
                                    </li>
                                </ul>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            </div>
        </nav>
    )
}

export default NavBar