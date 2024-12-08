"use client";
import Image from "next/image";
import Two from "/public/Vector.png";
import Frame1 from '/public/Frame(1).png';
import Frame2 from '/public/Frame(2).png';
import { FiSearch } from 'react-icons/fi';
function Navbar(){
    return(
        <><div className="flex justify-evenly items-center w-full border-b h-24 ">
        <Image
          src={Two}
          alt="logo"
          height={0}
          width={0}
          className="w-[59px] h-[21px] top-[29px] left-[10px" />

        <div className="hidden lg:flex justify-center items-center gap-10">

          <ul className=" text-lg text-black">
            New & Featured
          </ul>

          <ul className="text-lg text-black">
            Men
          </ul>

          <ul className="text-lg text-black">
            Women
          </ul>

          <ul className="text-lg text-black">
            Kids
          </ul>
          <ul className="text-lg text-black">
            Sale
          </ul>
          <ul className="text-lg text-black">
            SNKRS
          </ul>
        </div>

        <div className="flex justify-center items-center gap-8">
          <div className="p-3 w-[243px] h-[38px] hidden lg:flex justify-center items-center bg-gray-100 relative">
            {/* Magnifying Glass Icon */}
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <FiSearch className="w-5 h-5 text-gray-500" />
            </div>
            {/* Input Field */}
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 h-full outline-none border-none text-sm font-sans pl-8 pr-2 w-full" />

          </div>
          <Image src={Frame1} alt="" width={0} height={0}></Image>
          <Image src={Frame2} alt="" width={0} height={0}></Image>
        </div>
        
      </div><div className="flex flex-col justify-center items-center w-[2050px] h-[75px] bg-slate-50 space-y-2">
  <div className="font-sans text-[15px] font-medium leading-4 text-center">
    Hello Nike App
  </div>
  <div className="flex justify-center space-x-4">
    <p className="font-sans text-[15px] font-normal leading-6 text-center">
      Download the app to access everything Nike.
    </p>
    <p className="font-sans text-[11px] font-medium leading-6 text-center underline">
      Get Your Great
    </p>
  </div>
</div></>

    
    
    



    )
}
export default Navbar;