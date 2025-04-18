import { Menu } from '@headlessui/react'
import { FiLogOut } from 'react-icons/fi'
import { VscAccount } from 'react-icons/vsc'
import { MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const handleLogout = async () => {
    try {
       const res = await axios.post('/api/auth/logout');
       if(res.status === 200){
        navigate('/login');
       }
    } catch (error) {
      console.error(error);
      console.log('error', error);
    }
  }

  return (
    <div className='w-full shadow-sm p-7 bg-gray-900'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row gap-4 justify-evenly items-center text-white'>
          <Link to='/' className='text-2xl font-bold'>Created<span className='text-teal-400'>Store</span></Link>
          <Link to='/products' className="group text-white transition duration-300">Products
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
          </Link>
          <Link to='/docs' className="group text-white transition duration-300">Docs
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
          </Link>
          <Link to='/deleted' className="group text-white transition duration-300">DeletedProducts
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
          </Link>
          <Link to='/updated' className="group text-white transition duration-300">UpdatedProducts
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
          </Link>
        </div>

        <div className='flex flex-row justify-evenly items-center gap-4'>
          <Link to='/login' className="group text-white transition duration-300">Log in
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
          </Link>
          <Link to='/signup' className="group text-white transition duration-300">Create Account
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
          </Link>

          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <MdOutlineDarkMode size={20}/> : <MdDarkMode size={20}/>}
          </button>

          {/* Avatar with dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="avatar hover:ring-2 ring-teal-300 rounded-full transition duration-200">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
              </div>
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <div className="px-4 py-3">
                <p className="text-sm text-gray-900">Logged in as</p>
                <p className="text-sm font-medium text-gray-700 truncate">you@example.com</p>
              </div>
              <div className="py-1">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <FiLogOut className="mr-2" />
                  Log out
                </button>
              </div>
            </Menu.Items>
          </Menu>

        </div>
      </div>
    </div>
  )
}

export default Navbar
