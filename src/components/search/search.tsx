import React from 'react';
import { IoPricetagOutline } from "react-icons/io5";

const search = () => {
  const products = [
    {
      name: 'Black lace Heels',
      price: '189.00',
      img: 'https://preview.colorlib.com/theme/shop/img/r1.jpg.webp',
    },
    {
      name: 'Black lace Heels',
      price: '189.00',
      img: 'https://preview.colorlib.com/theme/shop/img/r2.jpg.webp',
    },
    {
      name: 'Black lace Heels',
      price: '189.00',
      img: 'https://preview.colorlib.com/theme/shop/img/r3.jpg.webp',
    },
    {
      name: 'Black lace Heels',
      price: '189.00',
      img: 'https://preview.colorlib.com/theme/shop/img/r4.jpg.webp',
    },
    {
      name: 'Black lace Heels',
      price: '189.00',
      img: 'https://preview.colorlib.com/theme/shop/img/r5.jpg.webp',
    },
    {
      name: 'Black lace Heels',
      price: '189.00',
      img: 'https://preview.colorlib.com/theme/shop/img/r6.jpg.webp',
    },
    {
      name: 'Black lace Heels',
      price: '189.00',
      img: 'https://preview.colorlib.com/theme/shop/img/r7.jpg.webp',
    },
    {
      name: 'Black lace Heels',
      price: '189.00',
      img: 'https://preview.colorlib.com/theme/shop/img/r8.jpg.webp',
    },
    {
      name: 'Black lace Heels',
      price: '189.00',
      img: 'https://preview.colorlib.com/theme/shop/img/r9.jpg.webp',
    },
    {
      name: 'Black lace Heels',
      price: '189.00',
      img: 'https://preview.colorlib.com/theme/shop/img/r10.jpg.webp',
    },
    {
      name: 'Black lace Heels',
      price: '189.00',
      img: 'https://preview.colorlib.com/theme/shop/img/r11.jpg.webp',
    },
    {
      name: 'Black lace Heels',
      price: '189.00',
      img: 'https://preview.colorlib.com/theme/shop/img/r12.jpg.webp',
    },
  ];

  return (
    <div className="max-w-[1140px] mx-auto">
      <h1 className="text-[#222222] text-[36px] text-center font-semibold mb-4">
        Related Searched Products
      </h1>

      <p className="text-[#777777] text-center text-[14px] mb-8">
        Who are in extremely love with eco-friendly system.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 text-center cursor-pointer"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-[70px] h-[70px] object-cover"
            />
            
            <div className="text-left">
              <h3 className="text-[#000000] text-[14px]">{product.name}</h3>
              
              <div className="flex items-center">
                <IoPricetagOutline className="mr-2" />
                <p className="text-[#000] font-bold">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default search;
