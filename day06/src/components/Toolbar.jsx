import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Toolbar = () => {
  const items = [
    { child: "Library", link: "#", style: "md:mt-4", active: window.location.pathname === "/" },
    { child: "Collections", link: "#", style: "mx-0 sm:mx-2 md:mx-3 md:mt-4" }
  ]
  return (
    <>
      <div className="grid grid-cols-3 md:flex flex-col w-full min-h-[50px] md:w-[280px] md:h-auto text-[1.05rem] text-gray-600 py-5 px-4 sm:px-8 md:px-4 md:pt-1 pb-8">
        {items.map((item, i) => (
          <a className={`md:order-3 w-full h-auto py-2 pr-4 ${item.style} md:mx-3 flex justify-start items-center hover:text-blue-700 font-[700] ${item.active && "text-indigo-700"}`} href={item.link} key={i}>{item.child}</a>
        ))}
        <button className="md:order-4 flex w-full ml-0 sm:ml-6 md:ml-3 md:mt-4 h-auto py-2 pr-0 sm:pr-4 items-center font-[700] hover:text-blue-700 focus:text-blue-800">Categories <FaAngleDown className="relative w-10 mx-0 sm:mx-2 md:mx-4 text-sm" /></button>
        <form className="md:order-2 group w-[56vw] md:w-full mt-8">
          <h3 className="md:order-1 py-4 text-lg hidden md:block">Search Library</h3>
          <input type="text" className="w-full pl-10 bg-white outline outline-gray-400 outline-2 rounded flex items-center justify-center py-2 px-4 group-focus-within:outline-blue-800" />
          <FaSearch className="translate-x-2 translate-y-[-1.8rem] text-gray-400 text-lg group-focus-within:text-blue-800" />
        </form>
        <div className="order-5 bg-[#f3f2fc] w-full min-h-[12rem] rounded-xl mt-12 py-5 px-2 hidden md:flex flex-col">
          <h3 className="font-extrabold text-2xl text-slate-800 pb-2">Contribute to stark</h3>
          <p className="text-slate-600">Got any accessbility resources or news?</p>
          <button className="mt-8 text-gray-50 bg-[#4124f1] hover:bg-[#361ece] active:bg-[#2b18a5] rounded-md py-2 px-[2.8rem] font-medium">Submit a Resource</button>
        </div>
      </div>
      <div className="my-2 mx-auto border-b-[1px] border-gray-300 w-[88%]"></div>
    </>
  );
}

export default Toolbar;