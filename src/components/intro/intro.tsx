import React from 'react';

const Main = () => {
  return (
    <div 
      className="flex items-center justify-between p-[50px] bg-gradient-to-r from-[#ff0066] to-[#ff66ff] h-[517px]" 
    >
      <img 
        src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp" 
        alt="Couple"
        className="w-[759px] h-[517px]"
      />

      <div className="text-white w-[50%] flex flex-col items-start justify-center">
        <div className="flex items-baseline space-x-2">
          <span className="text-[24px] font-semibold">Flat</span>
          <h1 className="text-[64px] font-bold">75% Off</h1>
        </div>
        <h1 className="text-[48px] font-bold leading-tight mt-4">
          It’s Happening This Season!
        </h1>

        <a 
          href="/subscription" 
          className="mt-8 inline-block bg-white text-[#000000] font-semibold text-[16px] px-6 py-3 rounded-full hover:bg-[#ff0066] hover:text-white transition-colors duration-300"
        >
          Purchase Now
        </a>
      </div>
    </div>
  );
};

export default Main;
