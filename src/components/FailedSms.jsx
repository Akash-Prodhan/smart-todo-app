import React from 'react'

export const FailedSms = () => {
  return (
    <>
    <div className="dark:text-white flex flex-col justify-center items-center gap-4 py-6">
        <p className='text-6xl'>😞</p>
        <p className='text-center'>Oops, Something went wrong. Please try again.</p>
    </div>
    </>
  )
}
