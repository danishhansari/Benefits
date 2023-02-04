import React from 'react'
import "./whyBenefits.css"
const WhyBenefits = () => {
  return (
    <>
    <div className=" w-10/12 mx-auto why-benefit mb-16">
      <div className="flex">
        <div className="purple list-item w-full">
          <button>Why Get Button?</button>
        <ul>
                <li><img src="./assets/right.svg" alt="" className='inline-block w-5 mr-1'/> Access Benefit in a single bundle</li>
                <li><img src="./assets/right.svg" alt="" className='inline-block w-5 mr-1'/>Flexible Benefits Plans</li>
                <li><img src="./assets/right.svg" alt="" className='inline-block w-5 mr-1'/>Secure and Compliance</li>
                <li><img src="./assets/right.svg" alt="" className='inline-block w-5 mr-1'/>Pay-as-you go</li>
                <li><img src="./assets/right.svg" alt="" className='inline-block w-5 mr-1'/>24/7 Support</li>
                <li><img src="./assets/right.svg" alt="" className='inline-block w-5 mr-1'/>Zero paper work</li>
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