import React from 'react'
import './questions.css';
const Questions = () => {
  return (
    <>
    <div className='w-10/12 mx-auto faq-question'>
    <div className='flex'>
      <div className="flex-img flex items-center">
        <img src="./assets/market.png" alt="" />
        <div className="heading ml-8">
          <h1 className='font-medium'>
            Have more
            <br /> Questions?
          </h1>
          <button className='btn-pink text-white mt-12'>Contact Us</button>
        </div>
      </div>
      <div className="faqs">
        <div className="faq">
          <div className="question">
            <p>What Benefits does GetBenefit offers?</p>
            {/* Arrow */}
          </div>
          <div className="answer">
            {/* Answer */}
          </div>
        </div>
        <div className="faq">
          <div className="question">
            <p>How much does it cost to use get benefits</p>
            {/* Arrow */}
          </div>
          <div className="answer">
            {/* Answer */}
          </div>
        </div>
        <div className="faq">
          <div className="question">
            <p>Can I Customize my benefits plans</p>
            {/* Arrow */}
          </div>
          <div className="answer">
            {/* Answer */}
          </div>
        </div>
        <div className="faq">
          <div className="question">
            <p>What do I do when I am confused</p>
            {/* Arrow */}
          </div>
          <div className="answer">
            {/* Answer */}
          </div>
        </div>
        <div className="faq">
          <div className="question">
            <p>Does GetBenefit offers 24/7 support</p>
            {/* Arrow */}
          </div>
          <div className="answer">
            {/* Answer */}
          </div>
        </div>
        <div className="faq">
          <div className="question">
            <p>Is GetBenefit available in all locations</p>
            {/* Arrow */}
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