import React from 'react'
import PropTypes from 'prop-types'

const ImageBox = (props) => {
  return (
    <span>
      image-box
    </span>
  )
}

ImageBox.propTypes = {
  title: PropTypes.string.isRequired,
  teaser: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired
}

export default ImageBox
