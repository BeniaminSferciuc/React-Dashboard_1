import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between border-b-2 border-secondary py-[12px] px-[24px] fixed right-0 left-[85px] bg-white z-10">
            <div className="flex items-center gap-2 relative">
                <FiSearch className="text-icon-primary absolute ml-2" />
                <input type="text" placeholder="Search anything here..." className="pl-8 p-1 outline-2 outline-primary rounded-lg" />
            </div>
            <div className="flex items-center gap-6">
                <div className="flex gap-4">
                    <div className="relative">
                        <IoNotificationsOutline size={22} className="text-icon-primary" />
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 absolute top-[1px] right-[3px]"></div>
                    </div>
                    <div className="relative">
                        <HiOutlineEnvelope size={22} className="text-icon-primary" />
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 absolute top-[1px] right-0"></div>
                    </div>
                    <IoSettingsOutline size={22} className="text-icon-primary" />
                </div>
                <div className="w-[2px] h-6 bg-secondary"></div>
                <div>
                    <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" alt="profile" width={40} className="rounded-full aspect-square object-cover"/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
