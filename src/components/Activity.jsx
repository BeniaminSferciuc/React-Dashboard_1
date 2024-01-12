import { BsThreeDotsVertical } from "react-icons/bs";
import { FaLongArrowAltUp } from "react-icons/fa";

const Activity = () => {
    return (
        <div className="flex gap-4 p-4 flex-wrap">
            <div className="border-2 border-secondary rounded-xl p-4 flex-1 flex flex-col justify-between basis-[250px]">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold">Target Overview</h1>
                    <BsThreeDotsVertical className="text-icon-primary" />
                </div>
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <span className="text-text-secondary">$</span>
                            <span className="font-bold text-xl">12,000.00</span>
                            <span className="text-text-secondary"> / $14k</span>
                        </div>
                        <p className="text-xs font-semibold text-text-secondary">
                            Target per month
                        </p>
                    </div>
                    <div className="w-full rounded-full h-4 bg-secondary mb-4">
                        <div className="w-2/3 bg-primary h-full rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaLongArrowAltUp className="text-icon-grow" />
                        <span className="text-icon-grow">18%</span>
                        <span className="text-text-secondary text-xs">
                            vs last month
                        </span>
                    </div>
                </div>
            </div>
            <div className="border-2 border-secondary rounded-xl p-4 flex-1 flex flex-col justify-between basis-[250px]">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold">Total Projects</h1>
                    <BsThreeDotsVertical className="text-icon-primary" />
                </div>
                <div>
                    <div className="flex gap-2 items-end mt-2 mb-4">
                        <span className="font-semibold text-4xl">320</span>
                        <div className="flex items-center">
                            <FaLongArrowAltUp className="text-icon-grow" />
                            <span className="text-icon-grow">15%</span>
                        </div>
                    </div>
                    <div className="w-full rounded-full h-4 bg-secondary mb-4">
                        <div className="w-2/3 bg-primary h-full rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaLongArrowAltUp className="text-icon-grow" />
                        <span className="text-icon-grow">18%</span>
                        <span className="text-text-secondary text-xs">
                            vs last month
                        </span>
                    </div>
                </div>
            </div>
            <div className="border-2 border-secondary rounded-xl p-4 flex-1 basis-[250px]">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold">New Leads</h1>
                    <BsThreeDotsVertical className="text-icon-primary" />
                </div>
                <div className="flex gap-2 items-end mt-2 mb-2">
                    <span className="font-semibold text-4xl">124</span>
                    <div className="flex items-center">
                        <FaLongArrowAltUp className="text-icon-grow" />
                        <span className="text-icon-grow">22%</span>
                    </div>
                </div>
                <p className="text-xs text-text-secondary font-semibold mb-4">Leads This Month</p>
                <div className="w-full rounded-full h-4 bg-secondary mb-4">
                    <div className="w-2/3 bg-primary h-full rounded-full"></div>
                </div>
                <div className="flex items-center gap-1">
                    <FaLongArrowAltUp className="text-icon-grow" />
                    <span className="text-icon-grow">18%</span>
                    <span className="text-text-secondary text-xs">
                        vs last month
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Activity;
