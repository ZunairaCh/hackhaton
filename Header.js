"use client";
import Image from "next/image";
import One from "/public/Frame.png";

        function Header(){
            return(
                <div className="w-full h-[36px] px-[38px] pl-[48px] bg-slate-50">
  <div className="w-full flex items-end justify-between">
    <div className="flex items-end space-x-7 sm:space-x-5 md:space-x-7">
      <Image src={One} alt="" width={20} height={20} /> {/* Adjust size as necessary */}
      <div className="text-sm sm:text-base md:text-sm">Find a Store</div>
      <div className="divider border-l border-black h-5"></div>
      <div className="text-sm sm:text-base md:text-sm">Help</div>
      <div className="divider border-l border-black h-5"></div>
      <div className="text-sm sm:text-base md:text-sm">Join Us</div>
      <div className="divider border-l border-black h-5"></div>
      <div className="text-sm sm:text-base md:text-sm">Sign In</div>
    </div>
  </div>
</div>

    
    
    
    



    )
}
export default Header;