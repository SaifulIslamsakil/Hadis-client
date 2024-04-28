import HadithPages from "@/Components/HadithPages";
import GetBooksDynamicData from "@/Utlis/GetBooksDynamicData";
import GetChapterDynamicData from "@/Utlis/GetChapterDynamicData";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";

const HadithChapter = async ({ params }) => {
    const booksData = await GetBooksDynamicData(params?.id)
    const chapterData = await GetChapterDynamicData(params?.id)
    return (
        <div className=" h-[80vh] bg-white w-[780px] rounded-2xl overflow-hidden">
            <div className=" w-full p-5 bg-slate-50">
                <p className=" flex items-center gap-2"><TbGridDots /> <span> {`< ${booksData?.book_name}`}</span></p>
            </div>
            <div className=" p-5 space-y-4">
                <div className=" flex justify-between items-center">
                    <h2 className=" font-semibold text-xl">{booksData?.title}</h2>
                    <div className="flex items-center input gap-2 input-bordered bg-slate-100 ">
                        <p className=" text-xl"><IoSearch /></p>
                        <input type="text" placeholder="Search For Filter" className="" />
                    </div>
                </div>
                <div className=" border-b pb-5 mt-3 text-sm ">
                    <p>{booksData?.book_descr}</p>
                </div>

                <div className=" space-y-3 overflow-scroll h-96">
                  {
                    chapterData?.map(chapter =><Link key={chapter?.id} href={`/pages/hadithContent/${chapter?.chapter_id}`}>
                    <div className=' hover:bg-green-100 p-5 rounded-lg flex justify-between items-center gap-5 group border-b'>
                        <div className=' flex items-center gap-5'>
                            <p className=' rounded-xl p-2 bg-slate-100 group-hover:bg-green-500 w-10 h-10 text-center group-hover:text-white '> {chapter?.number}</p>
                            <p className=' font-semibold'>{chapter?.title}</p>
                        </div>
                        <div>
                            <p>{chapter?.hadis_range}</p>
                        </div>
                    </div>
                </Link>)
                  }
                </div>
            </div>

        </div>
    );
};

export default HadithChapter;