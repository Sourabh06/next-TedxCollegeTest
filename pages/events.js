import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Head from "next/head";

export default function events() {
  return (
    <div>
      <Head>
        <title>Events at TEDxIIMRanchi</title>
        <meta name="TEDxIIMRanchi" content="TEDxIIMRanchi Official" />
        <link rel="icon" href="/logo-black.ico" />
      </Head>
      <div className="text-5xl flex justify-center gap-16 py-3">
        <h1>Events here</h1>
      </div>
      <div className="flex flex-col m-4 lg:w-[40rem] shadow-2xl">
        <h1 className="p-4 m-4 text-2xl text-center">Past Event</h1>
        <div className="shadow-sm p-4 relative overflow-hidden w-[100%] pt-[56.25%] custom-box-shadow bg-gray-300">
          <div className="m-2 p-2">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/wjcYNDMSw7k"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute top-0 left-0 bottom-0 right-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
