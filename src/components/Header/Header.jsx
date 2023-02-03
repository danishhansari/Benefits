import React from 'react';
import './header.css';
import Button from '../Button/Button'
import heroImg from '../assets/hero.jpg'
const Header = () => {
  return (
    <div className="flex justify-between hero">
        <div>
            <h1 className='heading heading-purple'>Bundled Benefit For The </h1>
            <h1 className='heading heading-pink mb-9'>Modern Workforce</h1>
            <Button />
        </div>
        <div>
            <img src={heroImg} alt="" />
        </div>
    </div>
    )
}

export default Header