import React from 'react'
import Button from '../Button/Button';
import './benefit.css'
const Benefits = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-9/12 md:mx-auto md:py-12 px-4">
        <div className=''>
        <img  src="./assets/standing.png" className="benefits-img md:w-full w-9/12 mx-auto mt-20" alt="Image" />
        </div>
        <div className='benefits-text md:w-6/12 mt-20'>
            <h1 className='text-4xl leading-none md:text-6xl md:font-semibold font-medium'>Get Benefit for Startup and Teams</h1>
            <p className='md:text-2xl text-md mt-4 md:mt-10 md:mb-20 mb-4'>Getbenefit offers startups and teams looking for cost-effective benefits a wide range of services to support the grouth and success of their teams</p>
            <Button />
        </div>
    </div>
    <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full md:w-9/12 md:mx-auto md:py-12 px-4">
        <div className='benefits-text md:w-6/12 mt-20'>
            <h1 className='text-4xl leading-none md:text-6xl md:font-semibold font-medium'>Get Benefit for Remote Workers and Freelancers</h1>
            <p className='md:text-2xl text-md mt-4 md:mt-10 md:mb-20 mb-4'>From flexible co-working spaces to low-cost Internet Subscriptions. Getbenefit helps remote workers and tailored to their specific needs</p>
            <Button />
        </div>
        <div>
        <img  src="./assets/boy-laptop.png" className="benefits-img md:w-full w-9/12 mx-auto mt-20" alt="Image" />
        </div>
    </div>
    </>
  )
}

export default Benefits