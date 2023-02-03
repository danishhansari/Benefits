import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const WhyBenefits = () => {
  return (
    <div className='flex'>
        <div>
            <button>Why Get Benefit?</button>
            <ul>
                <li><FontAwesomeIcon icon="fa-solid fa-check" />Access Benefit in a single bundle</li>
                <li><FontAwesomeIcon icon="fa-solid fa-check" />Flexible Benefits Plans</li>
                <li><FontAwesomeIcon icon="fa-solid fa-check" />Secure and Compliance</li>
                <li><FontAwesomeIcon icon="fa-solid fa-check" />Pay-as-you go</li>
                <li><FontAwesomeIcon icon="fa-solid fa-check" />24/7 Support</li>
                <li><FontAwesomeIcon icon="fa-solid fa-check" />Zero paper work</li>
            </ul>
        </div>
        <div></div>
    </div>
  )
}

export default WhyBenefits;