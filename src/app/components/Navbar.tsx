// components/Navbar.js
import { ConnectButton } from '@rainbow-me/rainbowkit';  // Import RainbowKit's ConnectButton
import Image from 'next/image';
import { FaSun, FaMoon } from 'react-icons/fa'; 
type NavbarProps = {
  toggleTheme: () => void;  // Function with no parameters that returns void
  theme: string;  // Theme should be a string, either 'light' or 'dark'
};

const Navbar: React.FC<NavbarProps> = ({toggleTheme, theme}) => {

  return (
<div className="navbar bg-base-100 px-4 lg:px-20">
      {/* Left Section */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="text-lg hover:text-blue-500 hover:scale-105 ">
                Tokenomics
              </a>
            </li>
            <li>
              <a className="text-lg hover:text-blue-500 hover:scale-105">
                Whitepaper
              </a>
            </li>
            <li>
              <a className="text-lg hover:text-blue-500 hover:scale-105 ">
                How To Buy
              </a>
            </li>
            <li>
              <a className="text-lg hover:text-blue-500 hover:scale-105 ">
                Staking
              </a>
            </li>
          </ul>
        </div>
        
        <Image
              src="/images/logo.png" // Correct path
              alt="Logo"
              width={70} // Specify width
              height={70} // Specify height
            />

      </div>

      {/* Center Menu for Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          <li>
            <a className="font-epilogue text-2xl  hover:text-blue-500 hover:scale-105 ">
              Tokenomics
            </a>
          </li>
          <li>
            <a className=" font-epilogue text-2xl hover:text-blue-500 hover:scale-105 ">
              Whitepaper
            </a>
          </li>
          <li>
            <a className=" font-epilogue text-2xl hover:text-blue-500 hover:scale-105 ">
              How To Buy
            </a>
          </li>
          <li>
            <a className=" font-epilogue text-2xl hover:text-blue-500 hover:scale-105 ">
              Staking
            </a>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end flex items-center space-x-4">
       {/* Theme Toggle Button */}
       <label className="swap swap-rotate">
          <input
            type="checkbox"
            className="toggle"
            onChange={toggleTheme}
            checked={theme === 'dark'}
          />
         
        </label>
 {/* Conditionally render the icons */}
 {theme === 'light' ? (
            <FaSun className="swap-on fill-current w-6 h-6" />
          ) : (
            <FaMoon className="swap-off fill-current w-6 h-6" />
          )}
        {/* Connect Button */}
        <ConnectButton label='Connect' />
      </div>
    </div>
  );
};

export default Navbar;
