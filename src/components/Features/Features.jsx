import React from 'react'
import './features.css'
const Features = () => {
  return (
    <>
      <div className='w-full mx-auto mt-12'>
        <div className="feature-grid mx-auto flex flex-col px-4">
            <div className="feature broadband w-full">
                <img className='w-14 mx-auto md:mx-0' src="./assets/wifi.svg" alt="Wifi" />
                <h1 className='text-2xl font-medium text-center md:text-left'>Broadband</h1>
                <p className='mt-4 leading-tight md:leading-normal'>Helping employees and freelancers access cost-efficient data plans, allowing them stay connected and productive.
                </p>
            </div>
            <div className="feature health">
                <img className='w-14 mx-auto md:mx-0' src="./assets/health.svg" alt="Health" />
                <h1 className='text-2xl font-medium text-center md:text-left'>Health</h1>
                <p className='mt-4 leading-tight md:leading-normal'>Partnering with HMOs and other healthcare providers to offer comprehensive healthcare coverage to employees.</p>
            </div>
            <div className="feature education">
                <img className='w-14 mx-auto md:mx-0' src="./assets/education.svg" alt="Education" />
                <h1 className='text-2xl font-medium text-center md:text-left'>Education</h1>
                <p className='mt-4 leading-tight md:leading-normal'>Providing employees and freelancers with opportunities to further their education and skills development, helping them stay competitive in the workplace.
                </p>
            </div>
            <div className="feature kk">
                <img className='w-14 mx-auto md:mx-0' src="./assets/401k.svg" alt="401" />
                <h1 className='text-2xl font-medium text-center md:text-left'>401(k)</h1>
                <p className='mt-4 leading-tight md:leading-normal'>Helping employees secure their financial future by offering access to top pension managers and 401k plans.</p>
            </div>
            <div className="feature co-working-space">
                <img className='w-14 mx-auto md:mx-0' src="./assets/co-working.svg" alt="co working" />
                <h1 className='text-2xl font-medium text-center md:text-left'>Co-working Space</h1>
                <p className='mt-4 leading-tight md:leading-normal'>Partnering with co-working spaces to offer employees and freelancers access to productive and collaborative workspaces.
                </p>
            </div>
            <div className="feature vacation">
                <img className='w-14 mx-auto md:mx-0' src="./assets/vacation.svg" alt="vacation bag" />
                <h1 className='text-2xl font-medium text-center md:text-left'>Vacation</h1>
                <p className='mt-4 leading-tight md:leading-normal'>Providing employees and freelancers with opportunities to further their education and skills development, helping them stay competitive in the workplace.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Features;