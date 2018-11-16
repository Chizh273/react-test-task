import React from 'react'
import PropTypes from 'prop-types'

const ContentGrid = ({children}) => (
  <div className="content-grid">
    {children}
  </div>
)

ContentGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ContentGrid
