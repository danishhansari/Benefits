import React from 'react'
import './spend.css'
const Spend = () => {
  return (
    <>
    <div className='md:w-10/12 px-2 md:p-0 md:mx-auto my-20'>
    <div className='flex flex-col md:flex-row justify-between items-center men'>
        <img src="./assets/men.jpg" alt="Men" className='max-w-6/12'/>
        <div className='men-text md:ml-8 mt-6 md:mt-0 max-w-3xl'>
          <p className='text-2xl md:text-5xl tracking-widest'>
          “Spend more time being productive, save more and get the most benefits out of life.”
          </p>
          </div>
    </div>
    </div>
    </>
  )
}

export default Spend