import React from 'react'
import PropTypes from 'prop-types'

import getComponentByName from '../../../utils/getComponentByName'

const Element = ({Content: {type, value}, Content, Children = false}) => {
  const Component = getComponentByName(type)

  return Children
    ? <Component Children={Children}/>
    : <Component {...value} />
}

Element.propTypes = {
  Content: PropTypes.shape({
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  }).isRequired,
  Children: PropTypes.object
}

export default Element
