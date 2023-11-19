import { useState } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa6"

const Navbar = ({ logoSrc }) => {
  const [clicked, setClick] = useState(false);

  const handleHamMenu = () => {
    setClick(!clicked);
  }

  return (
    <div className="w-screen min-h-[50px] bg-[#f6f6eb] flex px-2 md:px-4 shadow-sm">
      <div className="w-full mx-auto my-0 flex justify-between items-center max-w-[1240px]">
        <div className="flex items-center">
          <a className="text-indigo-800 mx-2" href="https://getstark.co/">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Home"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.4225 22.7124V25.607C18.1716 25.7753 20.8606 24.7551 22.806 22.8056C26.5647 19.0469 26.5647 12.9531 22.806 9.19477C22.4644 8.85297 22.0977 8.53716 21.709 8.25L19.6336 10.3252L10.3245 19.6332C8.61894 16.9674 8.99804 13.4741 11.2358 11.2362C12.6405 9.8287 14.5963 9.11525 16.5775 9.28762V6.39295C13.8284 6.22472 11.1394 7.24504 9.19403 9.19458C5.43532 12.9532 5.43532 19.047 9.19403 22.8054C9.53564 23.1472 9.90231 23.463 10.291 23.7501L12.3663 21.675L21.6754 12.3668C23.381 15.0325 23.0019 18.5259 20.7641 20.7638C19.3594 22.1713 17.4036 22.8847 15.4225 22.7124Z" fill="currentColor"></path></svg>
          </a>
          <ul className="hidden lg:flex mx-4">
            <li className="text-[.9em] text-[#4124f1] px-2 rounded-md hover:border-2 hover:border-[#4124f1] font-extrabold flex items-center mx-2 uppercase">Products <FaAngleDown className="mx-2" /></li>
            <li className="text-[.9em] text-[#4124f1] px-2 rounded-md hover:border-2 hover:border-[#4124f1] font-extrabold flex items-center mx-2 uppercase">Pricing</li>
            <li className="text-[.9em] text-[#4124f1] px-2 rounded-md hover:border-2 hover:border-[#4124f1] font-extrabold flex items-center mx-2 uppercase">Support</li>
            <li className="text-[.9em] text-[#4124f1] px-2 rounded-md hover:border-2 hover:border-[#4124f1] font-extrabold flex items-center mx-2 uppercase">Resources <FaAngleDown className="mx-2" /></li>
          </ul>
        </div>
        <div className="w-100 flex align-middle items-center">
          <button className="text-[#4124f1] hover:bg-[#3f24f120] text-[.94em] uppercase font-extrabold py-[0.3rem] px-[.6rem] md:px-[.5rem] sm:mx-5 rounded-md active:bg-[#2b18a533] hidden lg:flex">Log In</button>
          <button className="bg-[#4124f1] text-white text-[.94em] uppercase font-extrabold py-[0.3rem] px-[.6rem] md:px-[.5rem] mx-1 sm:mx-5 md:mx-0 rounded-md hover:bg-[#361ece] active:bg-[#2b18a5]">Start free trial</button>
          <button className="flex lg:hidden m-2 text-[#4124f1] cursor-pointer p-1 hover:bg-slate-200 active:bg-slate-300 rounded-full z-20" onClick={handleHamMenu}>
            <FaBars className="w-[20px] h-[20px] m-1" />
          </button>
          <ul className={`h-auto w-screen fixed top-[-100%] right-0 left-0 bg-gray-100 z-10 transition-all duration-300 ease-in-out ${clicked ? "top-[0]" : ""}`}>
            <a className="text-indigo-800 mx-2 absolute top-3 -left-2 border-b-2 w-full" href="https://getstark.co/">
              <svg className="mx-4 mb-2" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Home"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.4225 22.7124V25.607C18.1716 25.7753 20.8606 24.7551 22.806 22.8056C26.5647 19.0469 26.5647 12.9531 22.806 9.19477C22.4644 8.85297 22.0977 8.53716 21.709 8.25L19.6336 10.3252L10.3245 19.6332C8.61894 16.9674 8.99804 13.4741 11.2358 11.2362C12.6405 9.8287 14.5963 9.11525 16.5775 9.28762V6.39295C13.8284 6.22472 11.1394 7.24504 9.19403 9.19458C5.43532 12.9532 5.43532 19.047 9.19403 22.8054C9.53564 23.1472 9.90231 23.463 10.291 23.7501L12.3663 21.675L21.6754 12.3668C23.381 15.0325 23.0019 18.5259 20.7641 20.7638C19.3594 22.1713 17.4036 22.8847 15.4225 22.7124Z" fill="currentColor"></path></svg>
            </a> 

            <div className="h-20"></div>

            <li className={`text-[.9em] text-[#4124f1] py-6 px-4 rounded-md hover:border-2 hover:border-[#4124f1] font-extrabold ${clicked ? "flex" : "hidden"} items-center mx-2 uppercase`}>Products <FaAngleDown className="mx-2" /></li>
            <li className={`text-[.9em] text-[#4124f1] py-6 px-4 rounded-md hover:border-2 hover:border-[#4124f1] font-extrabold ${clicked ? "flex" : "hidden"} items-center mx-2 uppercase`}>Pricing</li>
            <li className={`text-[.9em] text-[#4124f1] py-6 px-4 rounded-md hover:border-2 hover:border-[#4124f1] font-extrabold ${clicked ? "flex" : "hidden"} items-center mx-2 uppercase`}>Support</li>
            <li className={`text-[.9em] text-[#4124f1] py-6 px-4 rounded-md hover:border-2 hover:border-[#4124f1] font-extrabold ${clicked ? "flex" : "hidden"} items-center mx-2 uppercase`}>Resources <FaAngleDown className="mx-2" /></li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;