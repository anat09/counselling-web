import React from 'react'

interface SubHeaderProps {
  title: string,
}

const SubHeader =({ title }: SubHeaderProps) => {
  return <div className="font-lato text-primary text-2xl text-center py-4 pb-2 font-bold">{ title }</div>
}

export default SubHeader