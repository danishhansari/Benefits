import React from 'react';
import './work.css'
const Work = () => {
    return (
        <>
        <div className='w-10/12 mx-auto mt-12'>
        <h1 className='work-heading my-6 font-semibold'>How it Works</h1>
        <div className="flex my-12 work-flex justify-between">
        <div className='work'>
            <img src="./assets/onboard.svg" alt="" />
            <h1 className='font-medium mt-9 mb-4 text-3xl'>Onboard</h1>
            <p>Sign up to get benefit and crate an account </p>
        </div>
        <div className='work'>
            <img src="./assets/get-plans.svg" alt="" />
            <h1 className='font-medium mt-9 mb-4 text-3xl'>Get Plans</h1>
            <p>Browse our selection of comprehensive benefits options and select the ones that are right for you</p>
        </div>
        <div className='work'>
            <img src="./assets/get-advice.svg" alt="" />
            <h1 className='font-medium mt-9 mb-4 text-3xl'>Get Advice</h1>
            <p>You can chose to speak with a representative who will advice you based on what plans or bundles you can opt for.</p>
        </div>
        <div className='work'>
            <img src="./assets/get-benefits.svg" alt="" />
            <h1 className='font-medium mt-9 mb-4 text-3xl'>Get Benefits</h1>
            <p>You make payment and start using your getbeneft voucher whenever you need to.</p>
        </div>
        </div>
        </div>
        </>
    )
}
export default Work;