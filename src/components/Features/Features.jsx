import React from 'react'
import './features.css'
const Features = () => {
  return (
    <>
      <div className='w-full mx-auto mt-12'>
        <div className="feature-grid mx-auto">
            <div className="feature broadband">
                <img src="./assets/wifi.svg" alt="Wifi" />
                <h1>Broadband</h1>
                <p>Helping employees and freelancers access cost-efficient data plans, allowing them stay connected and productive.
                </p>
            </div>
            <div className="feature health">
                <img src="./assets/health.svg" alt="Health" />
                <h1>Health</h1>
                <p>Partnering with HMOs and other healthcare providers to offer comprehensive healthcare coverage to employees.</p>
            </div>
            <div className="feature education">
                <img src="./assets/education.svg" alt="Education" />
                <h1>Education</h1>
                <p>Providing employees and freelancers with opportunities to further their education and skills development, helping them stay competitive in the workplace.
                </p>
            </div>
            <div className="feature kk">
                <img src="./assets/401k.svg" alt="401" />
                <h1>401(k)</h1>
                <p>Helping employees secure their financial future by offering access to top pension managers and 401k plans.</p>
            </div>
            <div className="feature co-working-space">
                <img src="./assets/co-working.svg" alt="co working" />
                <h1>Co-working Space</h1>
                <p>Partnering with co-working spaces to offer employees and freelancers access to productive and collaborative workspaces.
                </p>
            </div>
            <div className="feature vacation">
                <img src="./assets/vacation.svg" alt="vacation bag" />
                <h1>Vacation</h1>
                <p>Providing employees and freelancers with opportunities to further their education and skills development, helping them stay competitive in the workplace.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Features;