import React from 'react'
import PropTypes from 'prop-types'
import { Button, Header, Icon } from 'semantic-ui-react'

import './ButtonBox.scss'

const ButtonBox = ({title, link, url, background}) => {
  return (
    <div className="background-box button-box" style={{backgroundImage: `url(${background})`}}>
      <Header as="h2" className="white">{title}</Header>

      <a
        className="button-box__link"
        href={url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button color="red" className="button-box__button">
          {link}
          <Icon name='angle right' />
        </Button>
      </a>
    </div>
  )
}

ButtonBox.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired
}

export default ButtonBox
