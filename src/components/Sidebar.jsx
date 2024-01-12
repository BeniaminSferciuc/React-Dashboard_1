import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { TbSmartHome } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { TbUsers } from "react-icons/tb";
import { TbCalendarCheck } from "react-icons/tb";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
    const iconSize = 22;

    return (
        <div className="h-screen px-[24px] w-fit border-r-2 border-secondary flex flex-col gap-8 fixed z-20">
            <h1 className="font-bold text-center text-2xl pt-[12px]">Rp</h1>
            <div className="flex flex-col justify-between flex-1 pb-4">
                <div className="space-y-1">
                    <div className="p-2">
                        <TbSmartHome size={iconSize} className="text-icon-primary"/>
                    </div>
                    <div className="p-2">
                        <CgProfile size={iconSize} className="text-icon-primary"/>
                    </div>
                    <div className="p-2">
                        <TbUsers size={iconSize} className="text-icon-primary"/>
                    </div>
                    <div className="p-2 bg-secondary rounded-xl">
                        <HiOutlineRocketLaunch size={iconSize} className="text-primary"/>
                    </div>
                    <div className="p-2">
                        <TbCalendarCheck size={iconSize} className="text-icon-primary"/>
                    </div>
                    <div className="p-2">
                        <RiMoneyDollarBoxLine size={iconSize} className="text-icon-primary"/>
                    </div>
                    <div className="p-2">
                        <FiClock size={iconSize} className="text-icon-primary"/>
                    </div>
                    <div className="p-2">
                        <HiOutlineBriefcase size={iconSize} className="text-icon-primary"/>
                    </div>
                </div>
                <div className="space-y-1">
                    <div className="p-2">
                        <BiHelpCircle size={iconSize} className="text-icon-primary"/>
                    </div>
                    <div className="p-2">
                        <IoMdLogOut size={iconSize} className="text-icon-primary"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
