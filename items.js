"use client";
import Image from "next/image";
import Imagee from "/public/Image1.png";
import Image1 from "/public/Imagee(1).png";
import Image2 from "/public/Imagee(2).png";
import Image3 from "/public/Imagee(3).png";
import Image4 from "/public/imagees.png";
import Imagee4 from "/public/Imagee(4).png";
import Image5 from "/public/Imagee(5).png";
import Image6 from "/public/Imagee(6).png";

function Items() {
    return (
        <><div className="w-full h-auto absolute top-[3100px] left-1/4">
        <p className="font-sans text-[35px] font-medium leading-[25px] text-left p-10 -ml-56 text-black">
            Gear Up
        </p>
        
        <div className="flex items-center justify-between  mb-6 gap-4">
            <h2 className="text-[30px] font-semibold">Shop Men's</h2>
            
            <button className="bg-gray-200 p-4 rounded-full hover:bg-gray-300">
                &lt; {/* Less button */}
            </button>
            
            <button className="bg-gray-200 p-4 rounded-full hover:bg-gray-300">
                &gt; {/* Greater button */}
            </button>
        </div>
    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {/* Product Card 1 */}
            <div className="border w-full sm:w-[270px] lg:w-[270px] relative overflow-hidden gap-[16px]">
                <div className="flex items-center justify-between absolute top-[12px] left-[12px] w-full px-[12px]">
                    <div className="bg-white p-1 rounded-full mr-4"></div>
                </div>
                <div className="bg-[#F5F5F5] w-full h-[200px] sm:h-[250px] rounded-[4px] flex justify-center items-center">
                    <Image src={Imagee} alt="Product 5" width={500} height={500} className="object-contain" />
                </div>
                <div className="h-[56px] gap-[10px] p-4 pl-1">
                    <h3 className="text-[#000000] text-[14px] lg:text-[16px] font-[500]">Nike Dri-FIT ADV TechKnit Ultra</h3>
                    <div className="flex items-center space-x-2 mt-2">
                        <p className="text-[#DB4444] text-[14px] lg:text-[16px] font-[500]">$960</p>
                        <p className="text-[#000000] opacity-[50%] line-through text-[14px] lg:text-[16px] font-[500]">$1160</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="ml-1 text-sm sm:text-base">Men's Short-Sleeve Running Top</p>
                    </div>
                </div>
            </div>
    
            {/* Product Card 2 */}
            <div className="border w-full sm:w-[270px] lg:w-[270px] relative overflow-hidden gap-14 lg:gap-[16px]">
                <div className="flex items-center justify-between absolute top-[20px] left-[14px] pl-48">
                    <div className="bg-white p-1 rounded-full ml-6"></div>
                </div>
                <div className="bg-[#F5F5F5] w-full h-[200px] sm:h-[250px] rounded-[4px] flex justify-center items-center">
                    <Image src={Image1} alt="Men's Shorts" width={500} height={500} className="object-contain" />
                </div>
                <div className="p-4">
                    <h3 className="text-[#000000] text-[16px] font-[500]">Men's 18cm (approx.) 2-in-1 Versatile Shorts</h3>
                    <div className="flex items-center space-x-2 mt-2">
                        <p className="text-[#DB4444] text-[16px] font-[500]">$1160</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="ml-1 text-sm sm:text-base">Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
                    </div>
                </div>
            </div>
    
            {/* Product Card 3 */}
            <div className="border w-full sm:w-[270px] lg:w-[270px] relative overflow-hidden gap-[16px]">
                <div className="flex items-center justify-between absolute top-[20px] left-0 right-0 px-[14px]">
                    <div className="bg-white p-1 rounded-full ml-auto"></div>
                </div>
                <div className="bg-[#F5F5F5] w-full h-[250px] rounded-[4px] flex justify-center items-center">
                    <Image src={Image2} alt="Women's Top" width={500} height={500} className="object-contain" />
                </div>
                <div className="p-4">
                    <h3 className="text-[#000000] text-[16px] font-[500]"></h3>
                    <div className="flex items-center space-x-2 mt-2">
                        <p className="text-[#DB4444] text-[16px] font-[500]">$560</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="ml-1 text-sm sm:text-base">Women's Long-Sleeve Running Top</p>
                    </div>
                </div>
            </div>
    
            {/* Product Card 4 */}
            <div className="border w-full sm:w-[270px] lg:w-[270px] relative overflow-hidden gap-[16px]">
                <div className="flex items-center justify-between absolute top-[20px] left-[14px] pl-48">
                    <div className="bg-white p-1 rounded-full ml-6"></div>
                </div>
                <div className="bg-[#F5F5F5] w-full h-[250px] rounded-[4px] flex justify-center items-center">
                    <Image src={Image3} alt="Running Leggings" width={500} height={500} className="object-contain" />
                </div>
                <div className="p-4">
                    <h3 className="text-[#000000] text-[16px] font-[500]">Nike Fast</h3>
                    <div className="flex items-center space-x-2 mt-2">
                        <p className="text-[#DB4444] text-[16px] font-[500]">$250</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="ml-1 text-sm sm:text-base">Women's Mid-Rise 7/8 Running Leggings with Pockets</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="w-full h-[978px] absolute top-[3700px] left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center">
        <div className="absolute top-0 right-0 m-4">
            <p className="absolute top-14 -left-[1400px] font-medium mb-52 text-[30px]">Don't Miss</p>
        </div>
    
        <Image src={Image4} alt="Running Leggings" width={0} height={0} className="object-contain" />
    
        <div className="w-[100%] h-[60px] absolute bottom-0 left-0 flex flex-col items-center justify-center -mb-12">
            <p className="font-[Helvetica, Neue] text-[80px] font-medium leading-[140px] text-center decoration-solid">
                FLIGHT ESSENTIALS
            </p>
            <p className="text-center text-[26px] font-normal leading-[40px]">
                Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
            </p>
            <div className="flex justify-center m-8">
                <button className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-full">
                    Shop
                </button>
            </div>
        </div>
    </div>
    
    <div className="w-full h-[592px] absolute top-[4574.36px] left-1/2 transform -translate-x-1/2 mt-72 flex justify-center gap-3">
    <p className="absolute -top-9 font-medium mb-52 text-[30px]">The Essentials</p>

    <Image src={Imagee4} alt="Running Leggings" width={0} height={0} className="object-contain" />
    <Image src={Image5} alt="Running Leggings" width={0} height={0} className="object-contain" />
    <Image src={Image6} alt="Running Leggings" width={0} height={0} className="object-contain" />
</div>
    
    <div className="w-full h-[5442px] absolute top-[400px] flex flex-col justify-end py-8 left-[50%] transform -translate-x-1/2">
        <div className="bg-white text-black px-5 py-16 md:px-11">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                <div className="space-y-6 text-[30px]">
                    <h3 className="font-poppins text-xl font-semibold leading-[28px] text-left">Icons</h3>
                    <p className="font-poppins text-base font-medium leading-[24px] text-left">Air Force 1</p>
                    <p className="font-poppins text-base font-medium leading-[24px] text-left">Huarache</p>
                    <p className="font-poppins text-base font-medium leading-[24px] text-left">Air Max 90</p>
                    <p className="font-poppins text-base font-medium leading-[24px] text-left">Air Max 95</p>
                </div>
    
                <div className="space-y-5 text-[20px]">
                    <h3 className="text-[22px] font-poppins text-xl font-semibold leading-[28px] text-left">Shoes</h3>
                    <p>All Shoes</p>
                    <p>Custom Shoes</p>
                    <p>Jordan Shoes</p>
                    <p>Running Shoes</p>
                </div>
    
                <div className="space-y-5 text-[20px]">
                    <h3 className="font-semibold text-lg mb-2 text-[22px]">Clothing</h3>
                    <p>All Clothing</p>
                    <p>Modest Wear</p>
                    <p>Hoodies & Pullovers</p>
                    <p>Shirts & Tops</p>
                </div>
    
                <div className="space-y-5 text-[20px]">
                    <h3 className="font-semibold text-black text-lg mb-2 text-[22px]">Kid's</h3>
                    <p>Infant & Toddler Shoes</p>
                    <p>Kids' Shoes</p>
                    <p>Kids' Jordan Shoes</p>
                    <p>Kids' Basketball Shoes</p>
                </div>
            </div>
        </div>
    </div>

        </>
    );
}

export default Items;