import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

import './ImageBox.scss'

const ImageBox = ({title, teaser, link, background}) => {
  return (
    <div className="background-box image-box" style={{backgroundImage: `url(${background})`}}>
      <Header as="h2" className="white">{title}</Header>

      <div className="image-box__description">
        <span>{teaser}</span>
        <span className="image-box__read-more">
          {link}
        </span>
      </div>
    </div>
  )
}

ImageBox.propTypes = {
  title: PropTypes.string.isRequired,
  teaser: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired
}

export default ImageBox
