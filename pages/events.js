import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import Head from 'next/head'


export default function events() {
    return (
        <div>
            <Head>
            <title>Events at TEDxIIMRanchi</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 shadow-2xl'>
                <h1>Events here</h1>
            </div>
        </div>
    );
}