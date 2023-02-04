import React from 'react'

const Aboutus = () => {
  return (
    <>
    <img src="./assets/logo.png" alt="" />
    <div className="flex">
      <h1>About Us</h1>
      <ul className="grey">
        <li>Company</li>
        <li>Customer Support </li>
        <li>Contact</li>
      </ul>
    </div>
    <div className="about-us-text flex justify-between">
    <div>
    <p>
    <span className='purple-span'>Getbenefit's</span> mission is to revolutionize the gig economy by providing the most affordable and comprehensive benefits for remote workers, freelancers, and startups. We understand the unique challenges that come with the gig economy and we're committed to making it easier for gig workers to access the benefits they need. 
    </p>
    <p>
    Our platform uses AI technology to make the process of finding, selecting and accessing benefits more efficient and personalized, ensuring that our users are getting the <span className="pink-span">best options that fit their needs.</span>
    </p>
    </div>
    <div className='about-us-list-item'>
    <ul>
      <li>Contact Us</li>
      <li>Privacy Policy</li>
      <li>Terms & condition</li>
    </ul>
    <ul>
      <li>support@getbenefit.io</li>
    </ul>
    <ul>
      <li>Lagos, Nigeria</li>
      <li>info@getbenefit.io</li>
      <li>+234 8146 401 699</li>
    </ul>
    </div>
    </div>
    <div className="social-icons">

    </div>
    <div>
    getbenefit.io © 2023. All rights reserved
    </div>
    </>
  )
}

export default Aboutus