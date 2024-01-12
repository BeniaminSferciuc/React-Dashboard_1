import { LuCalendar } from "react-icons/lu";
import { MdAdd } from "react-icons/md";

const Header = () => {
    return (
        <div className="flex justify-between items-center p-4">
            <div>
                <h1 className="text-text-primary text-3xl">
                    Welcome back, <span className="font-bold">Royal</span>
                </h1>
                <p className="text-sm text-text-secondary mt-2">Track, manage and forecast projects and timeline.</p>
            </div>
            <div className="flex gap-4">
                <div className="flex items-center gap-2 rounded-lg px-3 py-1 border-2 border-secondary w-fit">
                    <LuCalendar />
                    <span>Jan 01 2022 - Jan 31 2022</span>
                </div>
                <button className="flex items-center gap-2 bg-primary rounded-lg px-3 py-1 text-sm font-semibold">
                    <MdAdd className="text-[#fff]"/>
                    <span className="text-[#fff]">Add Project</span>
                </button>
            </div>
        </div>
    );
};

export default Header;
