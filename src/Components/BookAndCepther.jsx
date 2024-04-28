
import GetBooksData from '@/Utlis/GetBooksData';
import { IoSearch } from 'react-icons/io5';
import HadithPages from './HadithPages';
const BookAndCepther = async () => {
    const bookData = await GetBooksData()

    const handelData = id => {
        // console.log(id)
    }
    return (
        <div className=" w-[350px]   bg-white  h-[80vh]  rounded-2xl overflow-hidden space-y-5 p-5">
            <div className=' flex justify-center items-center text-xl font-semibold '>
                <p className=' flex-1 p-4 bg-green-700 text-center  text-white'>বই</p>
                <p className=' flex-1 p-4 text-center'>অধ্যায়</p>
            </div>
            <div className="flex  items-center input gap-2 input-bordered">
                <p className=" text-xl"><IoSearch /></p>
                <input type="text" placeholder="Search For Filter" className="" />
            </div>
            <div>
                {
                    bookData.map(book => <HadithPages
                        key={book.id}
                        books={book}
                    ></HadithPages>)
                }
            </div>
        </div>
    );
};

export default BookAndCepther;