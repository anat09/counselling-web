import React from 'react';

const UserIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
};
const MailIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
};
const PhoneIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
};
const Icons = () => {
  return (
    <>
      <div className="flex flex-row items-center">
        <div className="text-secondary"><UserIcon /></div>
        <div className="font-lato py-3 px-4 text-lg">{ process.env.NEXT_PUBLIC_PROFESSIONAL_NAME }</div>
      </div>
      <div className="flex flex-row items-center">
        <div className="text-secondary"><MailIcon /></div>
        <div className="font-lato py-3 px-4 text-lg">{ process.env.NEXT_PUBLIC_EMAIL_ADDRESS }</div>
      </div>
      <div className="flex flex-row items-center">
        <div className="text-secondary"><PhoneIcon /></div>
        <div className="font-lato py-3 px-4 text-lg">{ process.env.NEXT_PUBLIC_PHONE_NUMBER }</div>
      </div>
    </>
  )
}
export default Icons;