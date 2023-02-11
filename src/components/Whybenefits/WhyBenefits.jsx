import React from 'react'
import "./whyBenefits.css"
const WhyBenefits = () => {
  return (
    <>
    <div className="md:w-10/12 mx-auto why-benefit mb-16">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="purple list-item md:w-1/2">
          <button className='text-2xl md:text-4xl mt-12 ml-6 md:ml-16'>Why Get Button?</button>
        <ul className='mb-8 md:mb-2 md:ml-16 ml-6'>
                <li className='text-lg md:text-2xl'><img src="./assets/right.svg" alt="img" className='inline-block w-4 mr-3'/> Access Benefit in a single bundle</li>
                <li className='text-lg md:text-2xl'><img src="./assets/right.svg" alt="img" className='inline-block w-4 mr-3'/>Flexible Benefits Plans</li>
                <li className='text-lg md:text-2xl'><img src="./assets/right.svg" alt="img" className='inline-block w-4 mr-3'/>Secure and Compliance</li>
                <li className='text-lg md:text-2xl'><img src="./assets/right.svg" alt="img" className='inline-block w-4 mr-3'/>Pay-as-you go</li>
                <li className='text-lg md:text-2xl'><img src="./assets/right.svg" alt="img" className='inline-block w-4 mr-3'/>24/7 Support</li>
                <li className='text-lg md:text-2xl'><img src="./assets/right.svg" alt="img" className='inline-block w-4 mr-3'/>Zero paper work</li>
            </ul>
        </div>
        <div className="img">
          <img src="./assets/freelancer.jpg" alt="freelancer" />
        </div>
      </div>
    </div>
    </>
  )
}

export default WhyBenefits;