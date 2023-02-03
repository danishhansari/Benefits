import React from 'react';
import './header.css';
import Button from '../Button/Button'
import heroImg from '../assets/hero.jpg'
import Navigation from '../Navigation/Navigation';
const Header = () => {
  return (
    <> 
    <div className='w-9/12 mx-auto'>
    <Navigation /> 
    <div className="flex justify-between hero pb-20">
        <div>
            <h1 className='heading heading-purple'>Bundled Benefit For The </h1>
            <h1 className='heading heading-pink mb-9'>Modern Workforce</h1>
            <Button />
        </div>
        <div>
            <img src={heroImg} alt="" />
        </div>
    </div>
    </div>
    </>
    )
}

export default Header