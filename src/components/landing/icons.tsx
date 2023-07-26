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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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