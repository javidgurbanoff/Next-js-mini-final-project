import React from 'react';

const Cards = () => {
  const products = [
    {
      id: 1,
      image: 'https://preview.colorlib.com/theme/shop/img/l1.jpg.webp',
      name: 'Long Sleeve shirt',
      price: '$150.00',
    },
    {
      id: 2,
      image: 'https://preview.colorlib.com/theme/shop/img/l2.jpg.webp',
      name: 'Long Sleeve shirt',
      price: '$150.00',
    },
    {
      id: 3,
      image: 'https://preview.colorlib.com/theme/shop/img/l3.jpg.webp',
      name: 'Long Sleeve shirt',
      price: '$150.00',
    },
    {
      id: 4,
      image: 'https://preview.colorlib.com/theme/shop/img/l4.jpg.webp',
      name: 'Long Sleeve shirt',
      price: '$150.00',
    },
];

  return (
    <div
      className="w-full h-[682px] flex flex-col justify-center items-center"
      style={{
        backgroundImage: 'linear-gradient(45deg, #f6463d 0%, #f6398d 45%, #f52cdc 100%)',
      }}
    >
      <h1 className="text-[#ffffff] text-[36px] font-semibold mb-4">
        New Released Products for Men
      </h1>
      <p className="text-white text-center text-lg mb-8">
        Who are in extremely love with eco-friendly system.
      </p>

      <div className="flex justify-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg w-[255px] h-[320px] shadow-lg p-4 text-center flex flex-col justify-between"
          >
            <img
              className="w-full h-[200px] object-cover rounded cursor-pointer"
              src={product.image}
              alt={product.name}
            />
            <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
            <p className="text-red-600 font-bold text-xl">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
