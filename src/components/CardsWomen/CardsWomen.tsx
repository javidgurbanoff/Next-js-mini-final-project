"use client";
import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Cards: React.FC = () => {
  const initialProducts = [
    {
      id: 1,
      image: "https://preview.colorlib.com/theme/shop/img/l5.jpg.webp",
      name: "Long Sleeve shirt",
      price: "$150.00",
    },
    {
      id: 2,
      image: "https://preview.colorlib.com/theme/shop/img/l6.jpg.webp",
      name: "Long Sleeve shirt",
      price: "$150.00",
    },
    {
      id: 3,
      image: "https://preview.colorlib.com/theme/shop/img/l7.jpg.webp",
      name: "Long Sleeve shirt",
      price: "$150.00",
    },
    {
      id: 4,
      image: "https://preview.colorlib.com/theme/shop/img/l8.jpg.webp",
      name: "Long Sleeve shirt",
      price: "$150.00",
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const deleteProduct = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      image: "https://preview.colorlib.com/theme/shop/img/l5.jpg.webp",
      name: `New Product ${products.length + 1}`,
      price: "$200.00",
    };
    setProducts([...products, newProduct]);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-12">
      <h1 className="text-[#222222] text-[36px] font-semibold mb-4">
        New Released Products for Women
      </h1>

      <p className="text-[#777777] text-center text-[14px] mb-8">
        Who are in extremely love with eco-friendly system.
      </p>

      <button
        onClick={addProduct}
        className="bg-blue-500 text-white px-6 py-2 rounded mb-8"
      >
        Add New Product
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-4 text-center flex flex-col"
          >
            <img
              className="w-[255px] h-[271px] object-cover mb-4 rounded cursor-pointer"
              src={product.image}
              alt={product.name}
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>

            <p className="text-red-600 font-bold text-xl mt-2">
              {product.price}
            </p>

            <div className="flex justify-center gap-5 mt-4">
              <MdModeEdit className="cursor-pointer text-blue-500" />

              <RiDeleteBin5Fill
                onClick={() => deleteProduct(product.id)}
                className="cursor-pointer text-red-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
