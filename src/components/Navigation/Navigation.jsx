import React from 'react'
import img1 from '../assets/logo.png';
import Button from '../Button/Button';
import './navigation.css';
const Navigation = () => {
  return (
    <nav className="navbar flex items-center justify-between">
    <img src={img1} alt="Image"/>        
    <ul className='font-medium'>
        <li className='inline-block p-2 mr-8 text-xl '><a href="#">Home</a></li>
        <li className='inline-block p-2 mr-8 text-xl'><a href="#">Offers</a></li>
        <li className='inline-block p-2 mr-8 text-xl'><a href="#">WhyGetBenefit</a></li>
        <li className='inline-block p-2 mr-8 text-xl'><a href="#">FAQs</a></li>
    </ul>
    <Button />
    </nav>
  )
}

export default Navigation