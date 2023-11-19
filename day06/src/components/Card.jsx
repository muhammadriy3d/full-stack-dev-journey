import { FaGoogle } from "react-icons/fa6";

const Card = ({ title, category, logo }) => {
  return (
    <a className="overflow-hidden transition-all ease-linear min-h-[218px] lg:max-h-[234px] lg:max-w-[261px] mt-4 lg:mr-4 border border-slate-300 hover:border-slate-400 pt-6 py-6 px-6 lg:px-6 rounded-lg cursor-pointer select-none" href="/#">
      {logo}
      <h3 className="uppercase text-indigo-600 text-md font-semibold mt-4 mb-1">{category}</h3>
      <h4 className="font-extrabold text-2xl truncate whitespace-pre-wrap line-clamp-2">{title}</h4>
    </a>
  );
}

export default Card;