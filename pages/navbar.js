import { BsFillMoonStarsFill } from 'react-icons/bs';
import mainLogo from '../public/logos/logo-black.png';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';


export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const [navbar, setNavbar] = useState(false);

    return (
        <header className='sticky top-0 z-50 shadow bg-white'>
            <nav className='py-10 mb-12 flex justify-between'>
                <div className='lg:flex xl:max-w-7xl mx-auto mx-w-full px-[-8%] flex-wrap w-full '>
                    <Link href='/'><Image src={mainLogo} alt='TEDxIIMRanchi logo' width={220} height={55}/></Link>
                    <FiMenu className='lg:hidden block h-6 w-6 cursor-pointer' onClick={() => setNavbar(!navbar)}/>
                </div>
                <ul className='flex items-center'>
                    <li>
                        <Link href='#' ><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/></Link>
                    </li>
                    <li>
                        <Link href='/' className='bg-tedxred lg:px-4 block py-2 ml-8 win-btn'>Home</Link>
                    </li>
                    <li>
                        <Link href='/events' className='bg-tedxred lg:px-4 block py-2 ml-8 win-btn'>Events</Link>
                    </li>
                    <li>
                        <Link href='/partners' className='bg-tedxred lg:px-4 block py-2 ml-8 win-btn'>Partners</Link>
                    </li>
                    <li>
                        <Link href='/about' className='bg-tedxred lg:px-4 block py-2 ml-8 win-btn'>About</Link>
                    </li>
                    <li>
                        <Link href='/register' className='bg-tedxred lg:px-4 block py-2 ml-8 win-btn'>Register</Link>
                    </li>
                </ul>
            </nav>

        </header>
        
    );
}
