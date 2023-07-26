import React from 'react'

interface PageHeaderProps {
  title: string,
}

const PageHeader =({ title }: PageHeaderProps) => {
  return <div className="text-primary font-lato pt-4 md:pt-0 pb-4 md:pb-w text-4xl md:text-6xl flex md:flex-none justify-center md:justify-start">{ title }</div>
}

export default PageHeader