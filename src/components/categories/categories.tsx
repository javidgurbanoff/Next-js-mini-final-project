import React from 'react';

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-[36px] font-bold text-gray-800">Shop for Different Categories</h1>
        <p className="text-gray-500 mt-2">Who are in extremely love with eco-friendly system.</p>
      </div>

      {/* Categories Flex Layout */}
      <div className="flex flex-wrap justify-between">
        {/* Top Row - 3 Items */}
        <div className="w-full lg:w-[32%] flex justify-center mb-6 lg:mb-0 group">
          {/* Category 1 - Product for Women */}
          <div className="relative w-full h-[400px]">
            <img
              src="https://preview.colorlib.com/theme/shop/img/c1.jpg.webp"
              alt="Product for Women"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#f6463d] via-[#f6398d] to-[#f52cdc] opacity-0 group-hover:opacity-75 flex justify-center items-center transition-opacity duration-300">
              <h3 className="text-white text-2xl font-semibold">Product for Women</h3>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[32%] flex justify-center mb-6 lg:mb-0 group">
          {/* Category 2 - Couple Products */}
          <div className="relative w-full h-[400px]">
            <img
              src="https://preview.colorlib.com/theme/shop/img/c2.jpg.webp"
              alt="Couple Products"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#f6463d] via-[#f6398d] to-[#f52cdc] opacity-0 group-hover:opacity-75 flex justify-center items-center transition-opacity duration-300">
              <h3 className="text-white text-2xl font-semibold">Couple Products</h3>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[32%] flex justify-center group">
          {/* Category 3 - Product for Men */}
          <div className="relative w-full h-[400px]">
            <img
              src="https://preview.colorlib.com/theme/shop/img/c4.jpg.webp"
              alt="Product for Men"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#f6463d] via-[#f6398d] to-[#f52cdc] opacity-0 group-hover:opacity-75 flex justify-center items-center transition-opacity duration-300">
              <h3 className="text-white text-2xl font-semibold">Product for Men</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Hot Deals */}
      <div className="w-full flex justify-center mt-6">
        <div className="relative w-full lg:w-[70%] h-[400px] group">
          <img
            src="https://preview.colorlib.com/theme/shop/img/c3.jpg.webp"
            alt="Hot Deals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#f6463d] via-[#f6398d] to-[#f52cdc] opacity-0 group-hover:opacity-75 flex justify-start items-center px-8 transition-opacity duration-300">
            <h3 className="text-white text-3xl font-bold">Hot Deals of This Month</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
