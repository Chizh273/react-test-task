import React from 'react'
import PropTypes from 'prop-types'

import getComponentByName from '../../../utils/getComponentByName'

const Element = ({Content, path, Children = false}) => {
  const {type, value, format} = Content
  const Component = getComponentByName(type)

  return format === 'component'
    ? Children
      ? <Component Children={Children} path={path}/>
      : <Component {...value} path={path}/>
    : null
}

Element.propTypes = {
  Content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    value: PropTypes.any,
  }).isRequired,
  path: PropTypes.arrayOf(PropTypes.string).isRequired,
  Children: PropTypes.object
}

export default Element
