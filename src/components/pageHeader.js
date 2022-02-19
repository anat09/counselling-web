import React from 'react'
import PropTypes from 'prop-types'

const PageHeader =({ title }) => {
  return (
    <div className="text-primary font-lato pt-4 md:pt-0 pb-4 md:pb-0 text-4xl md:text-6xl flex md:flex-none justify-center md:justify-start">{ title }</div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageHeader