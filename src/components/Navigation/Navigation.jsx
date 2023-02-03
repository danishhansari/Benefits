import React from 'react'
import img1 from '../assets/logo.png';
import Button from '../Button/Button';
import './navigation.css';
const Navigation = () => {
  return (
    <nav className="navbar flex items-center justify-between">
    
    <img src={img1} alt="Image"/>        
    <ul className='font-medium'>
        <li className='inline-block mr-8 text-xl active'><a href="#" className='px-4 py-2 hover:text-white rounded-md active'>Home</a></li>
        <li className='inline-block mr-8 text-xl'><a href="#" className='px-4 py-2 hover:text-white rounded-md'>Offers</a></li>
        <li className='inline-block mr-8 text-xl'><a href="#" className='px-4 py-2 hover:text-white rounded-md'>WhyGetBenefit</a></li>
        <li className='inline-block mr-8 text-xl'><a href="#" className='px-4 py-2 hover:text-white rounded-md'>FAQs</a></li>
    </ul>
    <Button />
    </nav>
  )
}

export default Navigation