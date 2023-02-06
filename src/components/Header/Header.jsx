import React from 'react';
import './header.css';
import Button from '../Button/Button'
import Navigation from '../Navigation/Navigation';
const Header = () => {
  return (
    <> 
    <div className='md:w-9/12 w-full mx-auto pl-4 md:pl-0'>
    <Navigation /> 
    <div className="md:flex justify-between hero pb-20 mt-20">
        <div>
            <h1 className='heading heading-purple text-4xl md:text-6xl font-semibold'>Bundled Benefit For The </h1>
            <h1 className='heading heading-pink text-4xl md:text-6xl font-semibold md:mt-4'>Modern Workforce</h1>
            <div className="my-16 md:my-6">
            <Button />
            </div>

        </div>
        <div>
            <img src="./assets/hero.jpg" alt="Mens" />
        </div>
    </div>
    </div>
    </>
    )
}

export default Header