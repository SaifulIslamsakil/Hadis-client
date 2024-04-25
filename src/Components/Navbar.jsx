import Image from "next/image";
import homeLogo from "../../public/home-logo.png"
import { IoSearch } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";


const Navbar = () => {
    return (
        <nav >
            <div className=" flex justify-between p-5 items-center">
                <div className=" flex items-center gap-5">
                    <Image src={homeLogo} alt="home_Logo" width={50} height={50} />
                    <div>
                        <h2 className=" text-xl font-semibold">হাদিস সমূহ</h2>
                        <p>হাদিস পড়ুন শিখুন এবং জানুন</p>
                    </div>
                </div>
                <div className=" flex items-center gap-10">
                    <div className="flex  items-center input gap-2 input-bordered w-full max-w-xs">
                        <p className=" text-xl"><IoSearch /></p>
                        <input type="text" placeholder="Search Hadith" className="" />
                    </div>
                    <p className=" flex justify-center items-center p-3 bg-green-500 text-2xl rounded-lg text-white"><IoIosSettings /></p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;