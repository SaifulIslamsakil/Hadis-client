import BookAndCepther from "./BookAndCepther";
import Sidebar from "./Sidebar";

const HadithPages = () => {
    return (
        <div className=" flex w-full ">
            <Sidebar></Sidebar>
            <div className=" bg-slate-100 w-full rounded-tl-3xl">
                <BookAndCepther></BookAndCepther>
            </div>
        </div>
    );
};

export default HadithPages;