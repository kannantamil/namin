import { CiCompass1 } from "react-icons/ci";
const Bodyd =()=>{
    return <div className="flex  flex-col items-center justify-center sm:p-[50px] w-[100%]">
        <h1 className="sm:text-[40px] text-[20px] font-extrabold text-[#322e2e]">Students Say <span className="text-[#9c309a]">About State StreetIT</span></h1>
        <div className="sm:flex p-[50px] sm:ml-[100px] sm:mr-[100px] w-[100%] space-y-6 gap-[30px] sm:items-start items-center">
            <div className="bg-[#bddbf9] p-[20px] w-full sm:w-[50%] rounded-[20px]   sm:gap-[10px] flex items-start justify-start">
           <span className="text-[30px]"> <CiCompass1 /></span>
                <p>"Enrolling in the Full Stack Development course was a game changer for me! Thanks to the comprehensive curriculum, I am now confidently navigating the tech world.”</p>

            </div>
            <div className="bg-[#bddbf9] p-[20px] w-full sm:w-[50%] rounded-[20px] items-start gap-[10px] flex ">
            <span><CiCompass1 className="text-[30px]"/></span>
                <p>"SSIT was amazing—got my dream job at Deloitte. Supportive trainers and placement team boosted my skills and confidence, making my experience invaluable".</p>

            </div>
            <div className="bg-[#bddbf9] p-[20px] w-full sm:w-[50%] rounded-[20px] shadow-[#bddbf9 5px 5px 5px] items-start gap-[10px] flex">
            <span><CiCompass1 className="text-[30px]"/></span>
                <p>"I can't praise the Full Stack Development course enough! The well structured content and interactive learning environment made a complex subject easy to grasp. Thank you State StreetIT!”</p>
            </div>
        </div>
    </div>

}

export default Bodyd