import { useState } from "react";
import { FaLink } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";

function Navbar(){

    const [a, seta] = useState(false)

    return <div className="sticky top-0 z-50">
      <div className="main relative  ">
        <nav className="nav p-[20px] sm:flex justify-between items-center  pl-[50px]  w-[100%] bg-[#d9f2fb]">
          <div className="items-center flex gap-[10px]">
          <FaLink className="rotate-45 text-[40px] text-[blueviolet] "/>
            <div className="flex flex-col pl-[20px]">
           
            <h1 className="text-[22px] font-extrabold">State Streets <span className="text-[blueviolet] font-extrabold ">IT</span></h1>
            <p className="text-[9px] pl-[5px]">campus skils Corporate offers</p>
            </div>
          </div>
          <button className="absolute sm:hidden top-3 right-3 font-bold text-[20px] " onClick={()=>seta(!a)}>=</button>
          <div className={`navb ${a ? "flex flex-col items-end" : "hidden"} text-right gap-[30px] sm:flex sm:flex-row  justify-center text-[18px]  mr-[30px] sm:m-0 font-semibold`}>
            <button>Home</button>
            <div className="flex items-center gap-[10px] ">
            <button>courses</button>
            <SlArrowDown className="text-[15px]" />
            </div>
            <button>Testmonials</button>
            <button>FAQ</button>
            <button className="bg-[#493eda] p-[10px] text-[white] rounded-[10px] ">Enquire now</button>
          </div> 
        </nav>
      
      </div> 
 
    </div>
}
export default Navbar



