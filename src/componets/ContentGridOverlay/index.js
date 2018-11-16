import React from 'react'
import PropTypes from 'prop-types'

const ContentGridOverlay = ({children}) => (
  <div className="content-grid-overlay">
    {children}
  </div>
)

ContentGridOverlay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ContentGridOverlay
