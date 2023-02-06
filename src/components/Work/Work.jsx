import React from 'react';
import './work.css'
const Work = () => {
    return (
        <>
        <div className='w-10/12 mx-auto mt-12' loading="lazy">
        <h1 className='work-heading my-6 font-semibold text-4xl md:text-6xl'>How it Works</h1>
        <div className="flex md:flex-row flex-col my-12 work-flex justify-between">
        <div className='work my-6 mx-auto md:mx-0'>
            <img src="./assets/onboard.svg" alt="Onboard" className='mx-auto md:mx-0'/>
            <h1 className='font-medium mt-9 mb-4 text-3xl text-center md:text-left'>Onboard</h1>
            <p className='text-md md:text-xl leading-tight mb-2'>Sign up to get benefit and crate an account </p>
        </div>
        <div className='work my-6 mx-auto md:mx-0'>
            <img src="./assets/get-plans.svg" alt="plans"className='mx-auto md:mx-0' />
            <h1 className='font-medium mt-9 mb-4 text-3xl text-center md:text-left'>Get Plans</h1>
            <p className='text-md md:text-xl leading-tight mb-2'>Browse our selection of comprehensive benefits options and select the ones that are right for you</p>
        </div>
        <div className='work my-6 mx-auto md:mx-0'>
            <img src="./assets/get-advice.svg" alt="advice"className='mx-auto md:mx-0' />
            <h1 className='font-medium mt-9 mb-4 text-3xl text-center md:text-left'>Get Advice</h1>
            <p className='text-md md:text-xl leading-tight mb-2'>You can chose to speak with a representative who will advice you based on what plans or bundles you can opt for.</p>
        </div>
        <div className='work my-6 mx-auto md:mx-0'>
            <img src="./assets/get-benefits.svg" alt="benefit"className='mx-auto md:mx-0' />
            <h1 className='font-medium mt-9 mb-4 text-3xl text-center md:text-left'>Get Benefits</h1>
            <p className='text-md md:text-xl leading-tight mb-2'>You make payment and start using your getbeneft voucher whenever you need to.</p>
        </div>
        </div>
        </div>
        </>
    )
}
export default Work;