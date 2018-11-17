import React from 'react'
import PropTypes from 'prop-types'

const ImageList = (props) => {
  return (
    <span>
      image-list
    </span>
  )
}

ImageList.propTypes = {
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  image: PropTypes.string.isRequired
}

export default ImageList
