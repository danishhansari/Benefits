import React from 'react';
import './header.css';
import Button from '../Button/Button'
import Navigation from '../Navigation/Navigation';
const Header = () => {
  return (
    <> 
    <div className='md:w-9/12 w-full mx-auto pl-4 md:pl-0'>
    <Navigation /> 
    <div className="hero pb-20 mt-12 md:mt-28 md:mb-16 md:flex justify-between items-center">
        <div>
            <h1 className='heading heading-purple text-4xl md:text-7xl font-semibold'>Bundled Benefit For The </h1>
            <h1 className='heading heading-pink text-4xl md:text-7xl font-semibold md:mt-4'>Modern Workforce</h1>
            <div className="my-16 md:my-6">
            <Button />
            </div>
        </div>
        <div>
            <img src="./assets/hero.jpg" alt="Mens" className='w-full h-auto' />
        </div>
    </div>
    </div>
    </>
    )
}

export default Header