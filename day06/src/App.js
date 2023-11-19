import { FaBook, FaE, FaGoogle, FaM, FaT, FaTable, FaV } from 'react-icons/fa6';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Toolbar from './components/Toolbar';
import logo from './logo.svg';
import PCard from './components/PotrateCards';

function App() {
  return (
    <div className="">
      <Navbar logoSrc={logo} />
      <main className='flex flex-col md:flex-row max-w-[1240px] mx-auto my-0 mb-40'>
        <aside className='md:w-[280px]'>
          <Toolbar />
        </aside>
        <div className='flex flex-col'>
          <section id='library' className='w-full flex flex-col items-center md:items-start p-5 sm:p-8 md:mt-8 lg:mx-8 max-w-[1000px]'>
            <div className='max-w-[75%] sm:max-w-[90%] flex flex-col justify-center self-start items-start'>
              <h3 className='font-extrabold text-4xl sm:text-5xl col-span-2'>New in the Library</h3>
              <p className='text-xl my-4'>Newly added accessibility resources, guides, and more.</p>
            </div>
            <a href='/#' className='absolute right-0 px-4 my-8 flex justify-end items-center uppercase text-indigo-800 underline font-bold'>View All</a>
            <div className='flex flex-col lg:flex-row lg:flex-wrap'>
              <Card title={"Making Accessible Books"} category={"Resources"} logo={<FaBook className="bg-white border rounded-lg text-3xl w-[45px] h-[45px] p-2" />} />
              <Card title={"Inclusive Publishing"} category={"resources"} logo={<FaT className="bg-white border rounded-lg text-3xl w-[45px] h-[45px] p-2" />} />
              <Card title={"The APLN (Accessible Publishing Learning Netwrok)"} category={"resources"} logo={<FaM className="bg-white border rounded-lg text-3xl w-[45px] h-[45px] p-2" />} />
              <Card title={"The DAYISY Consortium's Accessible Publishing Knowledge Base"} category={"resources"} logo={<FaV className="bg-white border rounded-lg text-3xl w-[45px] h-[45px] p-2" />} />
              <Card title={"Language, Please: Style Guide & Resources for journalists and storytellers"} category={"resources"} logo={<FaE className="bg-white border rounded-lg text-3xl w-[45px] h-[45px] p-2" />} />
              <Card title={"4 steps to more inclusive, precise language"} category={"Blogs & Articles"} logo={<FaGoogle className="bg-white border rounded-lg text-3xl w-[45px] h-[45px] p-2" />} />
            </div>
          </section>
          <section id='features' className='w-full flex flex-col md:items-start p-5 sm:p-8 md:mt-8 lg:mx-8 max-w-[1000px] '>
            <div className='max-w-[75%] sm:max-w-[90%] flex flex-col self-start justify-center items-start'>
              <h3 className='font-extrabold text-4xl sm:text-5xl col-span-2'>Featured Collections</h3>
              <p className='text-xl my-4'>Handpicked and curated collections around accessibility.</p>
            </div>
            <a href='/#' className='absolute right-0 px-4 my-8 flex justify-end items-center uppercase text-indigo-800 underline font-bold'>View All</a>
            <div className='flex flex-col lg:flex-row lg:flex-wrap'>
              <PCard cardClass={"bg-[#f3f2fc]"} title={"Making Accessible Color Combos"} imgSrc={"https://res.cloudinary.com/stark-lab/image/upload/v1653845743/library_collection_making_accessible_color_combos_42c8d90a99.png"} />
              <PCard cardClass={"bg-[#f3f2fc]"} title={"Making Accessible Color Combos"} imgSrc={"https://res.cloudinary.com/stark-lab/image/upload/v1653845743/library_collection_making_accessible_color_combos_42c8d90a99.png"} />
              <PCard cardClass={"bg-[#f3f2fc]"} title={"Making Accessible Color Combos"} imgSrc={"https://res.cloudinary.com/stark-lab/image/upload/v1653845743/library_collection_making_accessible_color_combos_42c8d90a99.png"} />
              <PCard cardClass={"bg-[#f3f2fc]"} title={"Making Accessible Color Combos"} imgSrc={"https://res.cloudinary.com/stark-lab/image/upload/v1653845743/library_collection_making_accessible_color_combos_42c8d90a99.png"} />
              <PCard cardClass={"bg-[#f3f2fc]"} title={"Making Accessible Color Combos"} imgSrc={"https://res.cloudinary.com/stark-lab/image/upload/v1653845743/library_collection_making_accessible_color_combos_42c8d90a99.png"} />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
