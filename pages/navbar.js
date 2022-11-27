import { BsFillMoonStarsFill } from "react-icons/bs";
import mainLogo from "../public/logos/logo-black.png";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        {/*logo container*/}
        <Link href="/">
          <Image
            src={mainLogo}
            alt="TEDxIIMRanchi logo"
            width={220}
            height={55}
            className="block float-left shrink-0"
          />
        </Link>
      </div>
      <div className="flex flex-col ml-4">
        <Link
          className="text-xl font-medium my-4 hover:shadow-inner"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Home
        </Link>
        <Link
          className="text-xl font-normal my-4 hover:shadow-inner"
          href="/events"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Events
        </Link>
        <Link
          className="text-xl font-normal my-4 hover:shadow-inner"
          href="/partners"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Partners
        </Link>
        <Link
          className="text-xl font-normal my-4 hover:shadow-inner"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </Link>
        <Link
          className="text-xl font-normal my-4 hover:shadow-inner"
          href="/register"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow">
      <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
        <MobileNav open={open} setOpen={setOpen} />

        <div className="w-3/12 items-center ">
          <Link href="/">
            <Image
              src={mainLogo}
              alt="TEDxIIMRanchi logo"
              width={220}
              height={55}
            />
          </Link>
        </div>
        <div className="w-9/12 flex justify-end items-center">
          <div
            className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden cursor-pointer hover:shadow-md"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-3.5" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
                open ? "w-0" : "w-full"
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
            />
          </div>

          <div className="hidden md:flex">
            <Link
              href="/"
              className="bg-tedxred lg:px-4 block py-2 ml-8 win-btn"
            >
              Home
            </Link>
            <Link
              href="/events"
              className="bg-tedxred lg:px-4 block py-2 ml-8 win-btn"
            >
              Events
            </Link>

            <Link
              href="/partners"
              className="bg-tedxred lg:px-4 block py-2 ml-8 win-btn"
            >
              Partners
            </Link>

            <Link
              href="/about"
              className="bg-tedxred lg:px-4 block py-2 ml-8 win-btn"
            >
              About
            </Link>
            <Link
              href="/register"
              className="bg-tedxred lg:px-4 block py-2 ml-8 win-btn"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
