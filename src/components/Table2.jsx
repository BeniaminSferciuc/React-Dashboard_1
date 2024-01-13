import { useState } from "react";
import ReactPaginate from "react-paginate";
import Checkbox from "./Checkbox";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi";
import { FaArrowDown } from "react-icons/fa";
import { data } from "../data/data";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Table = () => {
    const itemsPerPage = 5; 
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const paginatedData = data.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <div className="">
            <table className="w-full">
                <thead className="text-left bg-secondary border-x-2 border-secondary">
                    <tr className="text-xs text-text-secondary px-4">
                        <th className="pl-4">
                            <Checkbox />
                        </th>
                        <th className="flex items-center gap-1 font-semibold py-3">
                            <span>Project Name</span>
                            <FaArrowDown />
                        </th>
                        <th className="font-semibold">Work Timeline</th>
                        <th className="font-semibold">Project Team</th>
                        <th className="font-semibold">Project Type</th>
                        <th className="font-semibold">Progress</th>
                        <th className="font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-slate-900">
                    {paginatedData.map((item) => (
                        <tr
                            key={item.id}
                            className="border-2 border-secondary text-sm"
                        >
                            <td className="py-2 pl-4">
                                <Checkbox />
                            </td>
                            <td className="flex py-2 items-center gap-2">
                                <div className="w-[50px] aspect-square flex place-content-center">
                                    <img
                                        src={item.projectName.img}
                                        className="object-contain"
                                    />
                                </div>
                                <h1>{item.projectName.title}</h1>
                            </td>
                            <td>{item.workTimeline}</td>
                            <td>
                                <div className="flex relative">
                                    {item.projectTeam.map((member, index) => (
                                        <img
                                            key={index}
                                            src={member}
                                            width={35}
                                            className={`rounded-full aspect-square object-cover ${
                                                index !== 0 ? "ml-[-12px]" : ""
                                            } border-2 border-white`}
                                        ></img>
                                    ))}
                                </div>
                            </td>
                            <td>{item.projectType}</td>
                            <td>
                                <div className="flex gap-1">
                                    {item.progress.map((p) => (
                                        <div
                                            key={p}
                                            className="h-2 w-4 bg-primary rounded-full"
                                        ></div>
                                    ))}
                                </div>
                            </td>
                            <td>
                                <div className="flex gap-3">
                                    <FaRegTrashAlt className="text-icon-primary cursor-pointer" />
                                    <HiOutlinePencil className="text-icon-primary cursor-pointer" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ReactPaginate
                previousLabel={<PreviousButton />}
                nextLabel={<NextButton />}
                breakLabel={"..."}
                pageCount={Math.ceil(data.length / itemsPerPage)}
                pageRangeDisplayed={1}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
        </div>
    );
};

const NextButton = () => {
    return (
        <button className="flex items-center gap-2 hover:bg-[#F4F4F5] px-2 py-2 pl-3.5 rounded-lg">
            <span className="text-sm font-semibold">Next</span>
            <MdKeyboardArrowRight size={20}/>
        </button>
    );
};

const PreviousButton = () => {
    return (
        <button className="flex items-center gap-2 hover:bg-[#F4F4F5] px-2 py-2 pr-3.5 rounded-lg">
            <MdKeyboardArrowLeft size={20}/>
            <span className="text-sm font-semibold">Previous</span>
        </button>
    );
};

export default Table;
