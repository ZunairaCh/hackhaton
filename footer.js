"use client";
import React from 'react';
import Image  from 'next/image';
const Footer = () => {
    return (
      <footer>
      <div className="w-auto h-[5442.36px] absolute top-[900px] left-80 flex flex-col justify-end -px-16 py-7 sm:px-8 md:px-16 lg:px-20">
        <div className="bg-black text-white px-5 py-16 md:px-11">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
     
            
            {/* Exclusive Section */}
            <div className="space-y-8">
              <h2 className="text-white font-inter text-2xl font-bold leading-[24px] tracking-[0.03em] text-left underline-offset-4">
                FIND A STORE
              </h2>
              <h2 className="font-inter text-2xl font-bold leading-[24px] tracking-[0.03em] text-left underline-offset-4">
                BECOME A MEMBER
              </h2>
              <h2 className="font-inter text-2xl font-bold leading-[24px] tracking-[0.03em] text-left underline-offset-4">
                SIGN UP FOR EMAIL
              </h2>
              <h2 className="font-inter text-2xl font-bold leading-[24px] tracking-[0.03em] text-left underline-offset-4">
                SEND US FEEDBACK
              </h2>
              <h2 className="font-inter text-2xl font-bold leading-[24px] tracking-[0.03em] text-left underline-offset-4">
                STUDENT DISCOUNTS
              </h2>
            </div>
      
            {/* Support Section */}
            <div className="space-y-6">
              <h3 className="text-[22px] text-white font-poppins text-xl font-medium leading-[28px] text-left">Get Help</h3>
              <p className="font-poppins text-base text-slate-300 font-medium leading-[24px] text-left">Order Status</p>
              <p className="font-poppins text-base text-slate-300 font-medium leading-[24px] text-left">Delivery</p>
              <p className="font-poppins text-base text-slate-300 font-medium leading-[24px] text-left">Returns</p>
              <p className="font-poppins text-base text-slate-300 font-medium leading-[24px] text-left">Contact Us On Nike.com Inquiries</p>
              <p className="font-poppins text-base text-slate-300 font-medium leading-[24px] text-left">Contact Us On All Other Inquiries</p>
            </div>
      
            {/* Account Section */}
            <div className="space-y-5">
              <h3 className="text-[22px] font-poppins text-xl font-medium leading-[28px] text-left">About Nike</h3>
              <p className="font-poppins text-base text-slate-300 font-medium leading-[24px] text-left">News</p>
              <p className="font-poppins text-base text-slate-300 font-medium leading-[24px] text-left">Careers</p>
              <p className="font-poppins text-base text-slate-300 font-medium leading-[24px] text-left">Investors</p>
              <p className="font-poppins text-base text-slate-300 font-medium leading-[24px] text-left">Sustainability</p>
            </div>
            
           
    
          </div>
          <div className="text-center mt-6 text-sm font-poppins text-[20px] text-gray-800">
        <p>&copy; Copyright Rimel 2022. All rights reserved.</p>
      </div>
          
        </div>
      </div>
    </footer>
    
        
    );
  };
  
  export default Footer