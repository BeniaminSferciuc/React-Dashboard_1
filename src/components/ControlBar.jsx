import { AiOutlineSwap } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const ControlBar = () => {
    return (
        <div className="flex justify-between items-center border-t-2 border-r-2 border-l-2 border-secondary p-4 rounded-t-xl">
            <h1 className="font-bold">Leads & Client Activity</h1>
            <div className="flex gap-4">
                <button className="py-2 px-4 border-2 border-secondary flex items-center gap-2 rounded-xl">
                    <AiOutlineSwap />
                    <span className="text-sm font-semibold">filter</span>
                </button>
                <div className="flex items-center gap-2 relative border-2 rounded-xl border-secondary p-1">
                    <FiSearch className="text-icon-primary absolute ml-2" />
                    <input
                        type="text"
                        placeholder="Search anything here..."
                        className="pl-8 outline-2 outline-none"
                    />
                </div>
            </div>
        </div>
    );
};

export default ControlBar;
