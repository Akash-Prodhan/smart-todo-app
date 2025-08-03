import React from 'react'

const Loader = () => {
    return (
        <>
            <div className="dark:text-white flex flex-col justify-center items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" className="animate-spin" role="img" color="#e33cff">
                    <path d="M12 3V6" stroke="#e33cff" strokeWidth="2" strokeLinecap="round"></path>
                    <path opacity="0.4" d="M12 18V21" stroke="#e33cff" strokeWidth="2" strokeLinecap="round"></path>
                    <path opacity="0.4" d="M21 12L18 12" stroke="#e33cff" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M6 12L3 12" stroke="#e33cff" strokeWidth="2" strokeLinecap="round"></path>
                    <path opacity="0.4" d="M18.3635 5.63672L16.2422 7.75804" stroke="#e33cff" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M7.75804 16.2422L5.63672 18.3635" stroke="#e33cff" strokeWidth="2" strokeLinecap="round"></path>
                    <path opacity="0.4" d="M18.3635 18.3635L16.2422 16.2422" stroke="#e33cff" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M7.75804 7.75804L5.63672 5.63672" stroke="#e33cff" strokeWidth="2" strokeLinecap="round"></path>
                </svg>
                <p className='dark:text-white'>Ai is created personalised tasks for you.</p>
            </div>
        </>
    )
}

export default Loader