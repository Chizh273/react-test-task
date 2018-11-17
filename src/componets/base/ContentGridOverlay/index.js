import React from 'react'
import PropTypes from 'prop-types'
import Grid from '../../helper/Grid'

const ContentGridOverlay = ({Children}) => (
  <div className="content-grid-overlay">
    <Grid grid={Children}/>
  </div>
)

ContentGridOverlay.propTypes = {
  Children: PropTypes.object.isRequired
}

export default ContentGridOverlay
