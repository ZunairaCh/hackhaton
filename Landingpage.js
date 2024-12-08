"use client";
import Image from "next/image";
import Imagee from "/public/Imagee.png";
// import Image11 from "/public/Image.png";
// import Image1 from "/public/Image(1).png";
// import Image2 from "/public/Image(2).png";
function Landing(){
    return(
     <><div className="absolute top-[70%] left-1/2 w-[1344px] h-[977px] transform -translate-x-1/2 -translate-y-[60%] flex justify-center items-center ">
     <Image src={Imagee} alt="hb" width={0} height={0} />
   </div>
   
   <div className="absolute top-[100%] left-1/2 w-[1008px] h-[229px] transform -translate-x-1/2 ">
     <p className="font-sans text-[20px] font-medium leading-[24px] text-center text-black">
       First Look
     </p>
     <p className="absolute text-black text-[59px] top-[28px] left-[216.38px] w-[574px] h-[70px] font-[600] leading-[60px] text-center font-[Helvetica Neue]">
  NIKE AIR MAX PULSE
</p>

<p className="text-[22px] m-20 font-[400] text-center">
  Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse —designed to push you past your limits and help you go to the max.
</p>

<div className="flex justify-center gap-6 -m-16"> 
  <button className="px-8 py-4 bg-black text-white text-lg font-semibold rounded-full">
    Notify Me
  </button>
  <button className="px-20 py-4 bg-black text-white text-lg font-semibold rounded-full">
    Shop Air Max
  </button>
</div>

   </div>

   

   
  
   
</>
      
    )};
    export default Landing;