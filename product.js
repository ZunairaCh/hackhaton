"use client";
import Image from "next/image";
import Image11 from "/public/Image.png";
import Image1 from "/public/Image(1).png";
import Image2 from "/public/Image(2).png";
import Image3 from "/public/Image(3).png";
// components/ProductSection.js
  // Make sure Image is imported properly

  const ProductSection = () => {
    return (
     <>  <div className="w-full gap-14 max-w-[1170px] mx-auto p-4 lg:p-10 m-[1000px] ">
     <div className="flex flex-wrap items-center justify-between h-[56px] mb-8 sm:mb-10 lg:mb-12 ">
       <h2 className="text-[#000000] font-[400] text-[10px] lg:text-[20px]">Wishlist (4)</h2>
       <button className="border-[1px] px-8 py-4 lg:px-[48px] lg:py-[16px] border-[#00000080] text-[14px] lg:text-[16px] font-[500]">
         Move All To Bag
       </button>
     </div>
   
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-10">
       {/* Product 1 */}
       <div className="border w-full sm:w-[400px] md:w-[350px] relative gap-[14px]">
         <div className="flex items-center justify-between absolute top-[12px] left-[12px] w-full px-[12px]">
           <span className="bg-[#DB4444] text-[#FAFAFA] text-[12px] font-[400] px-[12px] py-[4px] rounded">
             -35%
           </span>
           <div className="bg-white p-1 rounded-full mr-4"></div>
         </div>
         <div className="bg-[#F5F5F5] w-full h-[250px] sm:h-[300px] rounded-[4px] flex justify-center items-center">
           <Image
             src={Image11}
             alt="Nike Air Max Pulse"
             width={0}
             height={0}
             className="object-contain"
           />
         </div>
   
         <div className="bg-[#000000] text-white text-center text-[12px] font-[400] br-[4px] py-[8px] flex items-center justify-center gap-2">
           Add To Cart
         </div>
         <div className="h-[56px] gap-[10px] p-4 pl-1">
           <h3 className="text-[#000000] text-[14px] lg:text-[16px] font-[500]">Gucci duffle bag</h3>
           <div className="flex items-center space-x-2 mt-2">
             <p className="text-[#DB4444] text-[14px] lg:text-[16px] font-[500]">$960</p>
             <p className="text-[#000000] opacity-[50%] line-through text-[14px] lg:text-[16px] font-[500]">$1160</p>
           </div>
         </div>
       </div>
   
       {/* Product 2 */}
       <div className="border w-full sm:w-[400px] md:w-[350px] relative gap-[19px]">
         <div className="flex items-center justify-between absolute top-[12px] left-[12px] w-full px-[12px]">
           <span className="bg-[#DB4444] text-[#FAFAFA] text-[12px] font-[400] px-[12px] py-[4px] rounded">
             -35%
           </span>
           <div className="bg-white p-1 rounded-full mr-4"></div>
         </div>
         <div className="bg-[#F5F5F5] w-full h-[250px] sm:h-[300px] rounded-[4px] flex justify-center items-center">
           <Image
             src={Image1}
             alt="Nike Air Max Pulse"
             width={0}
             height={0}
             className="object-contain"
           />
         </div>
   
         <div className="bg-[#000000] text-white text-center text-[12px] font-[400] br-[4px] py-[8px] flex items-center justify-center gap-2">
           Add To Cart
         </div>
         <div className="h-[56px] gap-[10px] p-4 pl-1">
           <h3 className="text-[#000000] text-[14px] lg:text-[16px] font-[500]">Gucci duffle bag</h3>
           <div className="flex items-center space-x-2 mt-2">
             <p className="text-[#DB4444] text-[14px] lg:text-[16px] font-[500]">$960</p>
             <p className="text-[#000000] opacity-[50%] line-through text-[14px] lg:text-[16px] font-[500]">$1160</p>
           </div>
         </div>
       </div>
   
       {/* Product 3 */}
       <div className="border w-full sm:w-[400px] md:w-[350px] relative gap-[19px]">
         <div className="flex items-center justify-between absolute top-[12px] left-[12px] w-full px-[12px]">
           <span className="bg-[#DB4444] text-[#FAFAFA] text-[12px] font-[400] px-[12px] py-[4px] rounded">
             -35%
           </span>
           <div className="bg-white p-1 rounded-full mr-4"></div>
         </div>
         <div className="bg-[#F5F5F5] w-full h-[250px] sm:h-[300px] rounded-[4px] flex justify-center items-center">
           <Image
             src={Image2}
             alt="Nike Air Max Pulse"
             width={0}
             height={0}
             className="object-contain"
           />
         </div>
   
         <div className="bg-[#000000] text-white text-center text-[12px] font-[400] br-[4px] py-[8px] flex items-center justify-center gap-2">
           Add To Cart
         </div>
         <div className="h-[56px] gap-[10px] p-4 pl-1">
           <h3 className="text-[#000000] text-[14px] lg:text-[16px] font-[500]">Gucci duffle bag</h3>
           <div className="flex items-center space-x-2 mt-2">
             <p className="text-[#DB4444] text-[14px] lg:text-[16px] font-[500]">$960</p>
             <p className="text-[#000000] opacity-[50%] line-through text-[14px] lg:text-[16px] font-[500]">$1160</p>
           </div>
         </div>
       </div>
     </div>
   
     <div className="w-[1700px] h-[977px] absolute top-[1807.36px] left-1/2 transform -translate-x-1/2">
       <p className="font-[Helvetica, Neue] text-[23px] font-medium leading-[28px] text-left no-underline decoration-solid">Featured</p>
       <Image src={Image3} alt="ncdkc" height={700} width={1700} />
       <div className="w-[100%] h-[60px] absolute left-[100.25px]">
         <p className="font-[Helvetica, Neue] mt-16 text-[80px] font-medium leading-[120px] text-center decoration-solid">
           STEP INTO WHAT FEELS GOOD
         </p>
         <p className="text-center text-[26px] font-normal leading-[24px] "> Cause everyone should know the feeling of running in that perfect pair.</p>
         <div className="flex justify-center m-8"> 
           <button className="px-10 py-4 bg-black text-white text-lg font-semibold rounded-full">
             Find your Shoe
           </button>
         </div>
       </div>
     </div>
   </div>
</>
  );
};

export default ProductSection;

