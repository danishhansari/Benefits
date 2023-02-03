import React from 'react'
import Img1 from '../assets/standing.png' 
import Img2 from '../assets/boy-laptop.png';
import Button from '../Button/Button';
import './benefit.css'
const Benefits = () => {
  return (
    <>
    <div className="flex justify-between px-32 py-4 mt-20 ml-12">
        <div>
        <img  src={Img1} className="benefits-img" alt="Image" />
        </div>
        <div className='w-6/12 benefits-text'>
            <h1 className='text-6xl'>Get Benefit for Startup and Teams</h1>
            <p className='text-2xl mt-10 mb-20'>Getbenefit offers startups and teams looking for cost-effective benefits a wide range of services to support the grouth and success of their teams</p>
            <Button />
        </div>
    </div>
    <div className="flex justify-between px-32 py-4 mt-20 ml-12">
        <div className='w-9/12 benefits-text'>
            <h1 className='text-6xl'>Get Benefit for Remote Workers and Freelancers</h1>
            <p className='text-2xl mt-10 mb-20'>From flexible co-working spaces to low-cost Internet Subscriptions. Getbenefit helps remote workers and tailored to their specific needs</p>
            <Button />
        </div>
        <div>
        <img  src={Img2} className="benefits-img mr-20" alt="Image" />
        </div>
    </div>
    </>
  )
}

export default Benefits