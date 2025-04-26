import React, { useContext } from 'react';
import { assets } from '../assets/assets.js';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';
import { toast } from 'react-toastify';
import axios from 'axios';
import home from '../../src/pages/Home.jsx'

const Navbar = () => {
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedin } = useContext(AppContext);

  const sentVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + '/api/auth/send-verify-otp');
      if (data.success) {
        navigate('/email-verify');
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + '/api/auth/logout');
      data.success && setIsLoggedin(false);
      data.success && setUserData(false);
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0 z-50'>
      {/* Logo or Title */}
      <div className="font-['Times_New_Roman',serif] font-extrabold text-2xl text-purple-700 cursor-pointer" onClick={() => navigate('/')}>
        Tech Zone
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 text-purple-700 font-semibold text-base sm:text-base mt-2">
        <button
          onClick={() => navigate('/')}
          className="hover:text-purple-700 transition-all underline decoration-purple-700 underline-offset-4"
        >
          Home
        </button>

        <button
          onClick={() => navigate('/about')}
          className="hover:text-purple-700 transition-all underline decoration-transparent hover:decoration-purple-700 underline-offset-4"
        >
          About Us
        </button>

        <button
          onClick={() => navigate('/blogs')}
          className="hover:text-purple-700 transition-all underline decoration-transparent hover:decoration-purple-700 underline-offset-4"
        >
          Blogs
        </button>

        <button
          onClick={() => navigate('/contact')}
          className="hover:text-purple-700 transition-all underline decoration-transparent hover:decoration-purple-700 underline-offset-4"
        >
          Contact
        </button>
      </div>


      {/* Right Side - Login or Profile */}
      {userData ? (
        <div className='w-8 h-8 flex justify-center items-center rounded-full relative text-white bg-black group cursor-pointer'>
          {userData.name[0].toUpperCase()}
          <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10'>
            <ul className='list-none m-0 p-2 bg-gray-100 text-sm'>
              {!userData.isAccountVerified && (
                <li onClick={sentVerificationOtp} className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Verify Email</li>
              )}
              <li onClick={logout} className='py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10'>Logout</li>
            </ul>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate('/login')}
          className='flex items-center gap-2 border border-purple-600 rounded-full px-6 py-2 text-white transition-all bg-purple-600 hover:bg-purple-700'
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Navbar;
