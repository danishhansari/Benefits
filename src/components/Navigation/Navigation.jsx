import React from 'react'
import Button from '../Button/Button';
import './navigation.css';
const Navigation = () => {
  return (
    <nav className="navbar flex items-center justify-between py-4 md:px-2">
    <img src="./assets/logo.png" alt="Image" className="w-24"/>        
    <ul className='font-medium hidden lg:block'>
        <li className='inline-block mr-8 text-xl active'><a href="#" className='px-4 py-2 hover:text-white rounded-md active'>Home</a></li>
        <li className='inline-block mr-8 text-xl'><a href="#" className='px-4 py-2 hover:text-white rounded-md'>Offers</a></li>
        <li className='inline-block mr-8 text-xl'><a href="#" className='px-4 py-2 hover:text-white rounded-md'>WhyGetBenefit</a></li>
        <li className='inline-block mr-8 text-xl'><a href="#" className='px-4 py-2 hover:text-white rounded-md'>FAQs</a></li>
    </ul>
    <div className="button hidden md:block">
    <Button />
    </div>
    </nav>
  )
}

export default Navigation