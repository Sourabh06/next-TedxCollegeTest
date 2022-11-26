import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'


export default function Footer() {
    return (
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 shadow-2xl'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
        </div>
    );
}
