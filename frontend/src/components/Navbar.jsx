// import { useTheme } from 'next-themes'
import { MdOutlineDarkMode, MdDarkMode  } from "react-icons/md";

const Navbar = () => {

  // const { theme, setTheme } = useTheme();

  return (
    <div className='bg-inherit w-full shadow-sm p-7'>
      <div className='flex flex-row justify-between'>
      <div className='flex flex-row gap-4 justify-evenly items-center text-black'>
        <a href='/' className='text-2xl font-bold'>Created<span className='text-teal-900'>Store!</span></a>
        <a href='/products' className="group text-black transition duration-300">Products
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        <a href='/docs' className="group text-black transition duration-300">Docs
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        <a href='/deleted' className="group text-black transition duration-300">DeletedProducts
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        <a href='/updated' className="group text-black transition duration-300">UpdatedProducts
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        

      </div>

      <div className='flex flex-row justify-evenly items-center gap-4'>
        <a href='/signin' className="group text-black transition duration-300">Sign In
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        <a href='/signup' className="group text-black transition duration-300">Create Account
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        <a href='/contact'className="group text-black transition duration-300">Contact Sales
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        {/* <button 
        className='hover:cursor-pointer'
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
        {
        theme === "dark" ? <MdOutlineDarkMode size={20}/> : <MdDarkMode size={20}/>
        }
        </button> */}
        <MdDarkMode size={20}/>
      </div>
      </div>
    </div>
  )
}

export default Navbar