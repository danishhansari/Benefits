import React from 'react'
import './questions.css';
const Questions = () => {
  return (
    <>
    <div className='md:w-10/12 mx-auto faq-question'>
    <div className='flex flex-col md:flex-row items-center justify-around'>
      <div className="flex-img flex flex-col md:flex-row items-center ">
        <img src="./assets/market.png" alt="Digital market" className='w-full' />
        <div className="heading mx-auto">
          <h1 className='font-medium text-center'>
            Have more
            <br /> Questions?
          </h1>
          <button className='btn-pink text-white my-8 w-full'>Contact Us</button>
        </div>
      </div>
      <div className="faqs md:w-2/5">
        <div className="faq">
          <div className="question py-6 px-6 flex items-center justify-between">
            <p>What Benefits does GetBenefit offers?</p>
            <img src="./assets/arrow.svg" alt="Arrow" />
          </div>
          <div className="answer">
            {/* Answer */}
          </div>
        </div>
        <div className="faq">
          <div className=" question py-6 px-6 flex items-center justify-between">
            <p>How much does it cost to use get benefits</p>
            <img src="./assets/arrow.svg" alt="Arrow" />
          </div>
          <div className="answer">
            {/* Answer */}
          </div>
        </div>
        <div className="faq">
          <div className=" question py-6 px-6 flex items-center justify-between">
            <p>Can I Customize my benefits plans</p>
            <img src="./assets/arrow.svg" alt="Arrow" />
          </div>
          <div className="answer">
            {/* Answer */}
          </div>
        </div>
        <div className="faq">
          <div className=" question py-6 px-6 flex items-center justify-between">
            <p>What do I do when I am confused</p>
            <img src="./assets/arrow.svg" alt="Arrow" />
          </div>
          <div className="answer">
            {/* Answer */}
          </div>
        </div>
        <div className="faq">
          <div className=" question py-6 px-6 flex items-center justify-between">
            <p>Does GetBenefit offers 24/7 support</p>
            <img src="./assets/arrow.svg" alt="Arrow" />
          </div>
          <div className="answer">
            {/* Answer */}
          </div>
        </div>
        <div className="faq">
          <div className=" question py-6 px-6 flex items-center justify-between">
            <p>Is GetBenefit available in all locations</p>
            <img src="./assets/arrow.svg" alt="Arrow" />
          </div>
          <div className="answer">
            {/* Answer */}
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Questions