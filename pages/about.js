import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us: TEDxIIMRanchi</title>
        <meta name="TEDxIIMRanchi" content="TEDxIIMRanchi Official" />
        <link rel="icon" href="/logo-black.ico" />
      </Head>
      <div className="text-5xl flex justify-center gap-16 py-3">
        <h1>Hey You! This is about section</h1>
      </div>
      <div className="lg:grid lg:grid-cols-3 w-full py-16">
        <div className="col-span-2">
          <div className="mx-auto mb-16 lg:mb-32 w-3/4 h-fit">
            <header className="text-center text-6xl my-8 text-black text-stroke-thin-red font-bold ">
              About TEDx
            </header>
            <p className="shadow-2xl rounded p-4 my-4 text-xl text-justify">
              There is one thing stronger than all the armies in the world, an
              idea whose time has come. Everything begins with an idea, a
              thought that provokes action and an intention that brings change.
            </p>
            <p className="shadow-2xl rounded p-4 my-4 text-xl text-justify">
              In the spirit of ideas worth spreading, TEDx is a program of local
              self-organized events that bring people together to share a
              TED-like experience. At a TEDx event, TED Talks video and live
              speakers combine to spark deep discussion and connection. These
              local, self-organized events are branded TEDx, where x =
              independently organized TED event. The TED Conference provides
              general guidance for the TEDx program, but individual TEDx events
              are self-organized. (Subject to certain rules and regulations.)
            </p>
            <p className="shadow-2xl rounded p-4 my-4 text-xl text-justify">
              We envision delivering impactful and worthwhile ideas that hold
              the potential to spark a change, ignite ambition and bring about
              the difference that needs to be made.
            </p>
            <p className="shadow-2xl rounded p-4 my-4 text-xl text-justify">
              TEDxIIMRanchi is a self-organized branch of the humongous
              non-profit organization TED. that bears ideas as tasteful as a
              fruit that one reaps from a blossoming and ever-growing tree.
            </p>
            <p className="shadow-2xl rounded p-4 my-4 text-xl text-justify">
              From hosting the versatile, robust and inspiring Kiran Bedi to
              world-renowned Indian car designer Dilip Chhabria, from discussing
              the future of technology to the dilemmas faced by today&apos;s
              youth. TEDxIIMRanchi has never failed to convey words of wisdom
              through influential voices and through the people who have met the
              thick and thins of life.
            </p>
            <p className="shadow-2xl rounded p-4 my-4 text-xl text-justify">
              Our motto is to enlighten people, to chisel in an idea that can
              drive necessary change, to impact fellow humans with powerful
              words, to ask people to keep heart, to ask them to believe that
              life is worth all the hustle and to appeal to a world that is
              ready to grow, ready to flourish and to welcome to new and better
              possibilities.
            </p>
          </div>

          <div className="mx-auto mb-16 lg:mb-32 w-3/4 h-fit">
            <header className="text-center text-6xl my-8 text-black text-stroke-thin-red font-bold ">
              What is TED
            </header>
            <p className="shadow-2xl rounded p-4 my-4 text-xl text-justify">
              TED is a nonprofit organization devoted to Ideas Worth Spreading.
              Started as a four-day conference in California 30 years ago, TED
              has grown to support its mission with multiple initiatives. The
              two annual TED Conferences invite the world&apos;s leading
              thinkers and doers to speak for 18 minutes or less. Many of these
              talks are then made available, free, at TED.com. TED speakers have
              included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard
              Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala,
              Sal Khan and Daniel Kahneman. The annual TED Conference takes
              place each spring in Vancouver, British Columbia, along with the
              TEDActive simulcast event in nearby Whistler.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
