import React from 'react';

const Countdown: React.FC = () => {
  return (
    <div className="w-full h-[415px] flex flex-col items-center justify-center">
      <h1 className="text-[#222222] text-[36px] text-center font-semibold mb-4">
        Exclusive Hot Deal Ends in:
      </h1>

      <p className="text-[#777777] text-center text-[14px] mb-8">
        Who are in extremely love with eco-friendly system.
      </p>

      <div className="flex space-x-4 text-center">
        <img src="https://preview.colorlib.com/theme/shop/img/cd.png.webp" alt="" />
        <div>
          <h2 className="text-[48px] text-pink-500">-2152</h2>
          <p className="text-[14px]">Days</p>
          <button className="mt-8 px-4 py-2 bg-pink-500 text-white rounded-lg">
        
        <a href="/subscription">
        SHOP NOW
        </a>
      </button>
        </div>
        <div>
          <h2 className="text-[48px] text-pink-500">11</h2>
          <p className="text-[14px]">Hours</p>
        </div>
        <div>
          <h2 className="text-[48px] text-pink-500">28</h2>
          <p className="text-[14px]">Minutes</p>
        </div>
        <div>
          <h2 className="text-[48px] text-pink-500">19</h2>
          <p className="text-[14px]">Seconds</p>
        </div>
      </div>      
    </div>
  );
};

export default Countdown;
