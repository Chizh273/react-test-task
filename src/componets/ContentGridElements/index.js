import React from 'react'
import PropTypes from 'prop-types'

const ContentGridElements = ({children}) => (
  <div className="content-grid-elements">
    {children}
  </div>
)

ContentGridElements.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ContentGridElements
