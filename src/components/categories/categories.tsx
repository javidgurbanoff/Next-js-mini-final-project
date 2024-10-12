import React from 'react';

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h1 className="text-[36px] font-bold text-gray-800">Shop for Different Categories</h1>
        <p className="text-gray-500 mt-2">Who are in extremely love with eco-friendly system.</p>
      </div>

      <div className="grid grid-cols-12 gap-4">
        
        <div className="col-span-8 flex flex-wrap gap-4">
          <div className="flex justify-center group w-[calc(50%-8px)]">
            <div className="relative w-[350px] h-[400px]">
              <img
                src="https://preview.colorlib.com/theme/shop/img/c1.jpg.webp"
                alt="Product for Women"
                className="w-[350px] h-[262px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#f6463d] via-[#f6398d] to-[#f52cdc] opacity-0 group-hover:opacity-75 flex justify-center items-center transition-opacity duration-300">
                <h3 className="text-white text-2xl font-semibold">Product for Women</h3>
              </div>
            </div>
          </div>

          <div className="flex justify-center group w-[calc(50%-8px)]">
            <div className="relative w-[350px] h-[400px]">
              <img
                src="https://preview.colorlib.com/theme/shop/img/c2.jpg.webp"
                alt="Couple Products"
                className="w-[350px] h-[262px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#f6463d] via-[#f6398d] to-[#f52cdc] opacity-0 group-hover:opacity-75 flex justify-center items-center transition-opacity duration-300">
                <h3 className="text-white text-2xl font-semibold">Product for Couple</h3>
              </div>
            </div>
          </div>

          <div className="flex justify-center group w-full mt-4">
            <div className="relative w-[730px] h-[262px]">
              <img
                src="https://preview.colorlib.com/theme/shop/img/c3.jpg.webp"
                alt="Hot Deals"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#f6463d] via-[#f6398d] to-[#f52cdc] opacity-0 group-hover:opacity-75 flex justify-start items-center px-8 transition-opacity duration-300">
                <h3 className="text-white text-3xl font-bold">Shop Now</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 flex justify-center group">
          <div className="relative w-[350px] h-[400px]">
            <img
              src="https://preview.colorlib.com/theme/shop/img/c4.jpg.webp"
              alt="Product for Men"
              className="w-[350px] h-[554px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#f6463d] via-[#f6398d] to-[#f52cdc] opacity-0 group-hover:opacity-75 flex justify-center items-center transition-opacity duration-300">
              <h3 className="text-white text-2xl font-semibold">Product for Men</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
