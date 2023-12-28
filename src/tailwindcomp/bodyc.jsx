import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoBookOutline } from "react-icons/io5";
import { PiBagBold } from "react-icons/pi";
import { AiOutlineCheck } from "react-icons/ai";
const Bodyc =()=>{
    return <div className="bg-[navy] p-[50px] flex flex-col w-full justify-center items-center gap-[30px] text-center sm:pl-[150px] sm:pr-[150px]">
        <h1 className="text-[white] font-semibold sm:text-[50px] text-[20px]  gap-[20px]">Start Your IT Career in 4 Steps</h1>
        <div className="sm:flex flex sm:flex-row flex-col gap-[50px] w-[100%] ">
            <div className="bg-[white] p-[40px] w-full sm:w-[25%]  flex flex-col gap-[10px] items-center text-center justify-center rounded-[10px]">
                < AiOutlineCloudUpload className="text-[50px] text-[#2f2c2c]"/>
                <h1 className="font-semibold text-[25px]">Enroll</h1>
                <p className="text-[#302e2e] text-[20px] ">Enroll in our comprehensive Full <br />Stack Development program to gain cutting-edge skills</p>
            </div>
            <div className="bg-[white] p-[40px] w-full sm:w-[25%] flex flex-col gap-[10px] items-center text-center justify-center rounded-[10px]">
            <IoBookOutline className="text-[50px] text-[#2f2c2c]"/>
                <h1 className="font-semibold text-[25px]">Learn</h1>
                <p className="text-[#302e2e] text-[20px] ">Learn through hands-on projects, expert <br /> guidance, and real- <br />world applications</p>
            </div>
            <div className="bg-[white] p-[40px] w-full sm:w-[25%] flex flex-col gap-[10px] items-center text-center justify-center rounded-[10px]">
            <PiBagBold className="text-[50px] text-[#2f2c2c]"/>
                <h1 className="font-semibold text-[25px]">Finish</h1>
                <p className="text-[#302e2e] text-[20px] ">Finish the course with a robust portfolio showcasing your capabilities</p>
            </div>
            <div className="bg-[white] p-[40px] w-full sm:w-[25%] flex flex-col gap-[10px] items-center text-center justify-center rounded-[10px]">
            <AiOutlineCheck className="text-[50px] text-[#2f2c2c]"/>
                <h1 className="font-semibold text-[25px]">Get Hired</h1>
                <p className="text-[#302e2e] text-[20px] ">Get Hired by top <br />companies eagerly <br />seeking skilled Full Stack Developers</p>
            </div>
            
        </div>
        <p className="text-[white] text-[15px] sm:text-[20px]">Launch your IT career confidently with us!</p>
    </div>
}
export default Bodyc