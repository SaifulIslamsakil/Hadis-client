"use client"
import Link from "next/link";

const HadithPages = ({books}) => {
    const handleData = (id)=>{
    //   alert(id)
    //   console.log(id)
    }
   
    return (
        <Link href={`/pages/${books?.id}`}><div className='  space-y-3'>
            <div onClick={()=> handleData(books?.id)} className='space-y-4 overflow-y-scroll h-96 snap-start '>
                <div className=' bg-green-100 p-4 rounded-lg flex items-center gap-5'>
                    <p className=' rounded-xl p-2 bg-green-500 w-10 h-10 text-center text-white'> H</p>
                    <div className=' space-y-2'>
                        <p className=' font-semibold'>{books?.title}</p>
                        <p className=' text-sm'>সর্বমোট হাদিস - {books?.number_of_hadis}</p>
                    </div>
                </div>
            </div>
        </div></Link>
    );
};

export default HadithPages;