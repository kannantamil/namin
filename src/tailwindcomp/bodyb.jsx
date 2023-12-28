import { HiOutlineBriefcase } from "react-icons/hi";
import { HiOutlineAnnotation } from "react-icons/hi";
import { HiAcademicCap } from "react-icons/hi";
import { HiOutlineCode } from "react-icons/hi";
import { HiPencilAlt } from "react-icons/hi";
import { GrAchievement } from "react-icons/gr";
import { FiActivity } from "react-icons/fi";
const Bodyb =()=>{
            return <div className=" pt-[50px] p-[80px]">
                <h1 className="font-extrabold text-[15px] sm:text-[30px] sm:mt-0 mt-[20px]">Key Highlights</h1>
                <div className="sm:flex justify-center gap-[70px] mt-[50px]">
                    <div className="sm:text-[30px] text-[15px] text-[#373636] flex flex-col gap-[30px]">
                        <p className="flex gap-[10px] sm:items-center "><HiOutlineBriefcase/>Designed for Graduates & Working <br />Professionals</p>
                        <p className="flex gap-[10px] sm:items-center"> <FiActivity />Build Portfolio with 20+ Projects</p>
                        <p className="flex gap-[10px] sm:items-center"> <HiPencilAlt />Personalized Feedback on Assignments.</p>
                        <p className="flex gap-[10px] sm:items-center"> <GrAchievement />100% Placement</p>
                    </div>
                    <div className="sm:text-[30px] text-[#373636] flex flex-col gap-[30px]">
                        <p className="flex gap-[10px] sm:items-center"> <HiAcademicCap/>100% Education Loan Available</p>
                        <p className="flex gap-[10px] sm:items-center"> <HiOutlineAnnotation/>Ask-me-Anything Sessions</p>
                        <p className="flex gap-[10px] sm:items-center"> <HiOutlineCode/>Practical Hands-on Workshops</p>
                        <p className="flex gap-[10px] sm:items-center"> @ Expert Guidance</p>
                    </div>
                </div>
            </div>
}
export default Bodyb