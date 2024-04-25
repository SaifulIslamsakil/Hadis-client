"use client"
import { IoSearch } from 'react-icons/io5';
const BookAndCepther = () => {
    return (
        <div className=" w-96  bg-white m-5 h-screen border rounded-tl-2xl overflow-hidden space-y-5">
            <div className=' flex justify-center items-center text-xl font-semibold '>
                <p className=' flex-1 p-4 bg-green-700 text-center  text-white'>বই</p>
                <p className=' flex-1 p-4 text-center'>অধ্যায়</p>
            </div>
            <div>
                <div className="flex  items-center input gap-2 input-bordered  max-w-xs mx-auto bg-slate-100 ">
                    <p className=" text-xl"><IoSearch /></p>
                    <input type="text" placeholder="Search For Filter" className="" />
                </div>
                <div className=' px-7 py-5 space-y-4  '>
                    <div className=' bg-green-100 p-4 rounded-lg flex items-center gap-5'>
                        <p className=' rounded-xl p-2 bg-green-500 w-10 h-10 text-center text-white'> H</p>
                        <div className=' space-y-2'>
                            <p className=' font-semibold'>সহিহ বুখারী</p>
                            <p>সর্বমোট হাদিস - ৭৫৬৩</p>
                        </div>
                    </div>
                    <div className=' hover:bg-green-100 p-4 rounded-lg flex items-center gap-5 group'>
                        <p className=' rounded-xl p-2 bg-slate-100 group-hover:bg-green-500 w-10 h-10 text-center group-hover:text-white '> H</p>
                        <div className=' space-y-2'>
                            <p className=' font-semibold'>সহিহ বুখারী</p>
                            <p>সর্বমোট হাদিস - ৭৫৬৩</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookAndCepther;