import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'


const Navbar = () => {
  return (

    <nav className=' mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <span className='mx-2 text-2xl font-semibold text-gray-100 shadow-lg cursor-pointer'>DD</span>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://github.com/awsmdeep" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-purple-600'>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/deepak-das-6588b7238/" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-purple-600'>
          <FaLinkedin />
        </a>
      </div>

    </nav>
  )
}

export default Navbar