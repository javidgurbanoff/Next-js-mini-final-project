import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white shadow-md w-full h-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex justify-between items-center w-full max-w-[1110px] h-[50px]">
          <div className="flex space-x-4">
            <p className="text-[12px] p-[15px] hover:bg-[#f41068] hover:text-[#fff] flex items-center font-semibold cursor-pointer	">
              +12312-3-1209
            </p>
            <p className="text-[12px] p-[15px] hover:bg-[#f41068] hover:text-[#fff] flex items-center font-semibold cursor-pointer	">
              SUPPORT@COLORLIB.COM
            </p>
          </div>
          <div className="hidden md:block pl-5 p-[15px">
            <a
              href="#"
              className="text-[12px] p-[15px] text-[#222222] hover:bg-[#f41068] hover:text-[#fff] flex items-center font-semibold"
            >
              LOGIN
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1110px] py-4">
          <div className="flex items-center">
            <Image className="cursor-pointer"
              src="https://preview.colorlib.com/theme/shop/img/logo.png.webp"
              alt="Logo"
              width={50}
              height={30}
            />
          </div>

          <nav className="hidden md:flex space-x-8 font-semibold pr-[19px] text-[14px] ">
            <a href="#" className="text-[#000]  hover:text-pink-600 p-[5px]">
              HOME
            </a>
            <a href="#" className="text-[#000] hover:text-pink-600 p-[5px]">
              CATEGORY
            </a>
            <a href="#" className="text-[#000] hover:text-pink-600 p-[5px]">
              MEN
            </a>
            <a href="#" className="text-[#000] hover:text-pink-600 p-[5px]">
              WOMEN
            </a>
            <a href="#" className="text-[#000] hover:text-pink-600 p-[5px]">
              LATEST
            </a>
            <a href="#" className="text-[#000] hover:text-pink-600 p-[5px]">
              PAGES
            </a>
          </nav>

          <div className="md:hidden flex items-center">
            <a href="#" className="text-gray-700">
              MENU
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
