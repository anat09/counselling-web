import React from 'react'
import PropTypes from 'prop-types'

const SubHeader =({ title }) => {
  return <div className="font-lato text-primary text-2xl py-2 font-bold">{ title }</div>
}

SubHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SubHeader