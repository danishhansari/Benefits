import React from 'react'
import './about.css';
const Aboutus = () => {
  return (
    <>
    <div className='w-full px-4 md:px-0 md:w-10/12 mx-auto my-12'>
      <img src="./assets/logo.png" alt="logo" className='mb-4' />
    <div className="flex justify-between flex-col md:flex-row">
      <div className="about-us">
        <h1 className='font-medium text-2xl my-4'>About Us</h1>
        <p>Getbenefit's mission is to revolutionize the gig economy by providing the most affordable and comprehensive benefits for remote workers, freelancers, and startups. We understand the unique challenges that come with the gig economy and we're committed to making it easier for gig workers to access the benefits they need. 
          </p>
          <p>
            Our platform uses AI technology to make the process of finding, selecting and accessing benefits more efficient and personalized, ensuring that our users are getting the best options that fit their needs.</p>
      </div>
      <div className="flex justify-center flex-col md:flex-row about-list">
        <ul className='mt-2'>
          <li className="gray">Company</li>
          <li>Contact Us </li>
          <li>Privacy Policy</li>
          <li>Terms & condition</li>
        </ul>
        <ul>
        <li className="gray">Customer Support</li>
        <li>support@getbenefit.io</li>
        </ul>
        <ul>
        <li className="gray">Contact</li>
        <li>Lagos, Nigeria</li>
        <li>info@getbenefit.io</li>
        <li>+234 8146 401 699</li>
        </ul>
      </div>
    </div>
    <div className="social-icons flex items-center justify-center md:justify-end">
    <a href=""><img src="./assets/twitter.svg" alt="" /></a>
    <a href=""><img src="./assets/facebook.svg" alt="" /></a>
    <a href=""><img src="./assets/instagram.svg" alt="" /></a>
    <a href=""><img src="./assets/linkedin.svg" alt="" /></a>
    </div>
    <div className='font-semibold mt-2'>
    Getbenefit.io © 2023. All rights reserved
    </div>
    </div>
    </>
  )
}

export default Aboutus