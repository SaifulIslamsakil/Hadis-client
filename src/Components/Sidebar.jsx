import { GoHome } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { LuBookmark } from "react-icons/lu";
import { PiSquaresFourBold } from "react-icons/pi";
import { IoIosSend } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { FaHandHoldingHeart } from "react-icons/fa";
const Sidebar = () => {

    return (
        <div className=" p-5 space-y-5 w-24 h-[80vh] ">
            <p className=" text-4xl hover:text-green-600 duration-500 hover:bg-slate-100 rounded-lg py-2 flex items-center justify-center "><GoHome /></p>
            <p className=" text-4xl text-white duration-500 bg-green-600 rounded-lg py-2 flex items-center justify-center "><TbGridDots /></p>
            <p className=" text-4xl hover:text-green-600 duration-500 hover:bg-slate-100 rounded-lg py-2 flex items-center justify-center "><IoBookOutline /></p>
            <p className=" text-4xl hover:text-green-600 duration-500 hover:bg-slate-100 rounded-lg py-2 flex items-center justify-center "><LuBookmark /></p>
            <p className=" text-4xl hover:text-green-600 duration-500 hover:bg-slate-100 rounded-lg py-2 flex items-center justify-center "><PiSquaresFourBold /></p>
            <p className=" text-4xl hover:text-green-600 duration-500 hover:bg-slate-100 rounded-lg py-2 flex items-center justify-center "><IoIosSend /></p>
            <p className=" text-4xl  text-white duration-500 bg-green-600  rounded-lg p-2 flex items-center justify-center "><FaHandHoldingHeart /></p>
            
        </div>
    );
};

export default Sidebar;