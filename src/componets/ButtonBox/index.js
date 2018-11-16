import React from 'react'
import PropTypes from 'prop-types'

const ButtonBox = (props) => {
  return (
    <span>
      button-box
    </span>
  )
}

ButtonBox.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired
}

export default ButtonBox
