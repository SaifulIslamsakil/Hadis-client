import { MdOutlineMenuBook } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { MdOutlineContentCopy } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdReportGmailerrorred } from "react-icons/md";
import { SlLogout } from "react-icons/sl";
import GetHadithData from "@/Utlis/GetHadithData";

const hadithContent = async ({params}) => {
        const hadithData = await GetHadithData(params?.id)
    return (
        <div className=" h-[80vh] w-[780px] rounded-2xl overflow-y-scroll space-y-5">
            <div>
                <div className=" w-full p-5 bg-slate-50 border-b">
                    <p className=" flex items-center gap-2"><TbGridDots /> <span> {`< ${" bukhari"}`}</span></p>
                </div>
                <div className=' bg-white flex justify-between p-5'>
                    <div className=" flex gap-5 items-center">
                        <p className=' text-5xl text-green-400'><MdOutlineMenuBook /></p>
                        <div>
                            <h2 className=" text-2xl ">সহিহ বুখারী</h2>
                            <p>সর্বমোট হাদিস - ৭৫৬৩</p>
                        </div>
                    </div>
                    <h3 className=" text-3xl font-semibold">صحيح البخاري</h3>
                </div>
            </div>
            <div className=' bg-white  p-5 rounded-lg gap-5  border-b'>
                <div className=' flex items-center gap-5 '>
                    <p className=' bg-green-500 rounded-xl p-2  w-10 h-10 text-center text-white '> {1}</p>
                    <p className=' font-semibold'>{"ওহীর সূচনা অধ্যায়"}</p>
                </div>
            </div>
         {
            hadithData?.map(hadith => <div key={hadith?.hadith_id} className=" bg-white p-8 space-y-5 ">
            <p className=" text-2xl text-green-400 flex items-center gap-5"><CiSettings /> <span className=" text-black"> {hadith?.hadith_id}</span></p>
            <p className=" text-2xl text-right ">{hadith?.ar}</p>

            <p className=" text-green-600">{hadith?.narrator}</p>
            <p>{hadith?.bn}</p>

            <div className=" flex justify-between items-center">
                <p>হাদিসের মান : <span className=" bg-green-500 text-white p-2 rounded-lg">সহিহ হাদিস</span></p>
                <div className=" text-2xl flex gap-5 ">
                    <div className="lg:tooltip" data-tip="copy">
                        <p ><MdOutlineContentCopy /></p>
                    </div>
                    <div className="lg:tooltip" data-tip="book mark">
                        <p><CiBookmark /></p>
                    </div>
                    <div className="lg:tooltip" data-tip="shyear">
                        <p><IoIosHeartEmpty /></p>
                    </div>
                    <div className="lg:tooltip" data-tip="report">
                        <p><MdReportGmailerrorred /></p>
                    </div>
                    <div className="lg:tooltip" data-tip="redriect">
                        <p><SlLogout /></p>
                    </div>

                </div>
            </div>
        </div>)
         }
        </div>
    );
};

export default hadithContent;