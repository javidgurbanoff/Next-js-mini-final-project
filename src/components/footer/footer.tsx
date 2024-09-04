import React from "react";
import { FaFacebookF, FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-12 w-full h-[475px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-12 max-w-screen-xl">
        {/* About Us Section */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-[220px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore dolore magna aliqua.
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold mb-4">Newsletter</h2>
          <p className="text-sm text-gray-400 mb-4">
            Stay updated with our latest
          </p>
          <form className="flex items-center max-w-[250px]">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-2 w-full text-black bg-[#191919]  h-[36px]"
            />
            <button className="bg-gradient-to-r from-pink-600 to-purple-500 p-3 ml-2 w-[40px] h-[36px]">
              <span className="text-white">→</span>
            </button>
          </form>
        </div>

        {/* Instagram Feed Section */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold mb-4">Instagram Feed</h2>
          <div className="grid grid-cols-4 gap-2">
            <img
              src="https://preview.colorlib.com/theme/shop/img/i1.jpg.webp"
              alt="Instagram image"
              className="w-[58px] h-[58px]"
            />
            <img
              src="https://preview.colorlib.com/theme/shop/img/i2.jpg.webp"
              alt="Instagram image"
              className="w-[58px] h-[58px]"
            />
            <img
              src="https://preview.colorlib.com/theme/shop/img/i3.jpg.webp"
              alt="Instagram image"
              className="w-[58px] h-[58px]"
            />
            <img
              src="https://preview.colorlib.com/theme/shop/img/i4.jpg.webp"
              alt="Instagram image"
              className="w-[58px] h-[58px]"
            />
            <img
              src="https://preview.colorlib.com/theme/shop/img/i5.jpg.webp"
              alt="Instagram image"
              className="w-[58px] h-[58px]"
            />
            <img
              src="https://preview.colorlib.com/theme/shop/img/i6.jpg.webp"
              alt="Instagram image"
              className="w-[58px] h-[58px]"
            />
            <img
              src="https://preview.colorlib.com/theme/shop/img/i7.jpg.webp"
              alt="Instagram image"
              className="w-[58px] h-[58px]"
            />
            <img
              src="https://preview.colorlib.com/theme/shop/img/i8.jpg.webp"
              alt="Instagram image"
              className="w-[58px] h-[58px]"
            />
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="md:col-span-1">
          <h2 className="text-[18px[] font-bold mb-4">Follow Us</h2>
          <p className="text-sm text-gray-400 mb-4">Let us be social</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:bg-[#f41068]">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="text-gray-400 hover:bg-[#f41068]">
              <FaTwitter size={14} />
            </a>
            <a href="#" className="text-gray-400 hover:bg-[#f41068]">
              <FaDribbble size={14} />
            </a>
            <a href="#" className="text-gray-400 hover:bg-[#f41068]">
              <FaBehance size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className=" mt-8 pt-4 text-center text-sm text-gray-400">
        <p>
          Copyright ©2024 All rights reserved | This template is made with{" "}
          <span className="text-pink-600">❤️</span> by{" "}
          <a href="https://colorlib.com" className="text-pink-600">
            Colorlib
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
