import React from 'react'
import { FaMusic } from "react-icons/fa6";
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import Link from 'next/link';

type Props = {}

const NavBar = (props: Props) => {

    return (
        <nav className='flex flex-row gap-3 justify-between items-center p-3 bg-[#200080] fixed top-0 start-0 w-screen shadow'>
            <div className='text-fuchsia-600 text-3xl font-bold flex gap-2 items-center'>
                <FaMusic />
                <h3>Flow Studio</h3>
            </div>
            <ToggleGroup type="single" size={"lg"} className='gap-3 text-white pe-5'>
                <ToggleGroupItem value="albums" className='max-lg:hidden'>
                    <Link href={"/#albums"}>Albums</Link>
                </ToggleGroupItem>
                <ToggleGroupItem value="news">
                    <Link href={"/#news"}>News</Link>
                </ToggleGroupItem>
            </ToggleGroup>
        </nav>
    )
}

export default NavBar