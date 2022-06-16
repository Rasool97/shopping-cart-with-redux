  import logo from '../assets/images/logo.png';
  import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
  
  const Footer = () => {
      return (
          <footer className='bg-white divide-y divide-gray-200 w-full'>
              <div className='text-gray-500 flex flex-col items-center gap-y-8 py-14'>
                  <div>
                      <img src={logo} alt="logo" className='w-52 h-16' />
                  </div>
                  <ul className='flex justify-between text-xs font-medium sm:text-base gap-x-3 sm:gap-x-8'>
                      <li>
                          <a className='text-gray-400 transition-colors hover:text-blue-400 cursor-pointer'>HOME</a>
                      </li>
                      <li >
                          <a className='text-gray-400 transition-colors hover:text-blue-400 cursor-pointer'>HELP</a>
                      </li>
                      <li >
                          <a className='text-gray-400 transition-colors hover:text-blue-400 cursor-pointer'>PRIVACY</a>
                      </li>
                      <li >
                          <a className='text-gray-400 transition-colors hover:text-blue-400 cursor-pointer'>HOW IT WORKS?</a>
                      </li>
                      <li >
                          <a className='text-gray-400 transition-colors hover:text-blue-400 cursor-pointer'>CONTACT US</a>
                      </li>
                  </ul>
                  <ul className='flex justify-between gap-x-8'>
                      <li>
                          <a>
                            <FaFacebook className='text-gray-400 text-2xl transition-colors hover:text-blue-400 cursor-pointer' />
                          </a>
                      </li>
                      <li>
                          <a>
                            <FaTwitter className='text-gray-400 text-2xl transition-colors hover:text-blue-400 cursor-pointer' /> 
                          </a>
                      </li>
                      <li>
                          <a>
                            <FaLinkedin className='text-gray-400 text-2xl transition-colors hover:text-blue-400 cursor-pointer' />
                          </a>
                      </li>
                      <li>
                          <a>
                            <FaInstagram className='text-gray-400 text-2xl transition-colors hover:text-blue-400 cursor-pointer' />
                          </a>
                      </li>
                  </ul>
              </div>
              <div className='py-4 text-sm sm:text-base text-center text-gray-700'>
                  <p>COPYRIGHT © 2022 ONLINESHOP - DEVEOPED BY COMPANY</p>
              </div>
          </footer>
      );
  };
  
  export default Footer;