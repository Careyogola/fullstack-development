// import { useTheme } from 'next-themes'
import { MdOutlineDarkMode, MdDarkMode  } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";


const Navbar = () => {

  // const { theme, setTheme } = useTheme();

  return (
    <div className='w-full shadow-sm p-7'>
      <div className='flex flex-row justify-between'>
      <div className='flex flex-row gap-4 justify-evenly items-center text-white'>
        <a href='/' className='text-2xl font-bold'>Created<span className='text-teal-400'>Store</span></a>
        <a href='/products' className="group text-white transition duration-300">Products
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        <a href='/docs' className="group text-white transition duration-300">Docs
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        <a href='/deleted' className="group text-white transition duration-300">DeletedProducts
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        <a href='/updated' className="group text-white transition duration-300">UpdatedProducts
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>


      </div>

      <div className='flex flex-row justify-evenly items-center gap-4'>
        <a href='/login' className="group text-white transition duration-300">Log in
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        <a href='/signups' className="group text-white transition duration-300">Create Account
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        
        {/* <button
        className='hover:cursor-pointer'
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
        {
        theme === "dark" ? <MdOutlineDarkMode size={20}/> : <MdDarkMode size={20}/>
        }
        </button> */}
        <MdDarkMode size={20} color="white"/>
        <VscAccount size={20} color="white" />
      </div>
      </div>
    </div>
  )
}

export default Navbar