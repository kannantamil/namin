import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { useState } from "react";
const Bodye =()=>{
    const [b,setb] = useState(false)
    return <div className="pt-[90px] pb-[30px] bg-[navy] flex flex-col items-center justify-center text-[white] gap-[40px] sm:pl-[200px] sm:pr-[150px] ">
        <div className="sm:flex  flex  sm:flex-row flex-col text-[white] gap-[80px] justify-center sm:gap-[50px] sm:items-start items-center relative">
        
            <div className="w-[80%] sm:w-[15%]"><img src="https://statestreetit.com/img/SSIT-Logo-light.png" alt="" className="h-[50px]" />
            <div className="flex text-[20px] pt-[20px] gap-[20px]">
            <FaInstagram />
            <FaFacebook />
            <CiLinkedin />
            </div>
            </div>
            <div className="sm:w-[20%] w-[80%] flex flex-col gap-[20px]">
                <h1 className="font-semibold text-[20px]">Contact us</h1>
                <p className="text-[15px]">State Street IT, Ticel Park,Anna ,<br /> University Campus,Vadavalli,<br /> Coimbatore - 641 046.</p>
                <p className="text-[15px]">+91 63808 12149
                    enquiry@statestreetit.com</p>
            </div>
           <div className="flex flex-col items-center">
           <button className="absolute text-[40px] sm:hidden" onClick={()=>setb(!b)}>show</button>
           </div>
            <div className={`${b ? "felx" : "hidden"} sm:block sm:w-[20%] w-[80%] flex flex-col gap-[10px]`}>
                <h1 className="font-semibold text-[20px]">Company</h1>
                <p className="text-[20px]">About State Street IT</p>
                <p className="text-[20px]">Courses</p>
                <p className="text-[20px]">Placement Companies</p>
                <p className="text-[20px]">Help center</p>
                <p className="text-[20px]">Privacy & terms</p>
            </div>
            <div className="flex flex-col gap-[20px] sm:w-[20%] sm:items-start items-center">
                <h1 className="font-semibold text-[20px]">Map Location</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3783.4036145285313!2d76.884978!3d11.040448!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85f7808126e0d%3A0x2f4473b48153dc84!2sTICEL%20BIO%20PARK%20LTD%20Phase%20-%20III!5e1!3m2!1sen!2sin!4v1703523514311!5m2!1sen!2sin"></iframe>
            </div>
        </div>
        <p className="sm:text-[20px] text-[8px]">Copyright © 2023 by State Street IT, Inc. All rights reserved.</p>
    </div>
}
export default Bodye