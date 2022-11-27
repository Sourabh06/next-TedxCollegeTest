import Link from "next/link";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bottom-0 p-5">
      <div className="grid-cols-5">
        <p className="w-auto">
          TEDxIIMRanchi is a self-organized branch of the humongous non-profit
          organization TEDx. Our motto is to enlighten people,to impact fellow
          humans with powerful words, to ask them to believe that life is worth
          all the hustle and to appeal to a world that is ready to grow, ready
          to flourish and to welcome to new and better possibilities.
        </p>
      </div>

      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 shadow-2xl">
        <Link
          href="https://twitter.com/tedxiimranchi"
          className="hover:text-tedxred hover:scale-105"
        >
          <AiFillTwitterCircle />
        </Link>
        <Link
          href="https://www.linkedin.com/company/tedxiimranchi"
          className="hover:text-tedxred hover:scale-105"
        >
          <AiFillLinkedin />
        </Link>
        <Link
          href="https://www.facebook.com/tedxiimranchi"
          className="hover:text-tedxred hover:scale-105"
        >
          <AiFillFacebook />
        </Link>
        <Link
          href="https://www.instagram.com/tedxiimranchi/"
          className="hover:text-tedxred hover:scale-105"
        >
          <AiFillInstagram />
        </Link>
      </div>
    </div>
  );
}
