// components/Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-100 text-base-content p-10 border-t rounded-t-3xl border-gray-300"> {/* Added border and rounded corners */}
      <aside className="flex flex-col items-center">
        <nav className='mb-8'>
          <div className="grid grid-flow-col gap-4 sm:gap-8">
            <a href='https://www.youtube.com/@NeoBlockChainBank' target='_blank'>
              <FaYoutube className='text-2xl text-red-500' />
            </a>
            <a href='https://t.me/neoblockchainbank' target='_blank'>
              <FaTelegram className='text-2xl text-blue-500'/>
            </a>
            <a  href='https://www.facebook.com/profile.php?id=61561880461431' href='_blank'>
              <FaFacebook className='text-2xl text-blue-500'/>
            </a>
            <a href='https://x.com/Neo_bcb' href='_blank'>
              <FaTwitter className='text-2xl text-blue-500'/>
            </a>
            <a href='https://www.instagram.com/neoblockchain_bank?igsh=MW94b2FqaWJhaHI4ag%3D%3D' href='_blank'>
              <FaInstagram className='text-2xl text-orange-500'/>
            </a>
          </div>
        </nav>
        <p className='text-sm sm:text-md mb-2 text-center'>
          Disclaimer: Cryptocurrency may be unregulated in your jurisdiction.<br/> 
          The value of cryptocurrencies may fluctuate. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
        </p>
        <p className="text-base-content text-sm text-center">
          Copyright © {new Date().getFullYear()} - All rights reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;