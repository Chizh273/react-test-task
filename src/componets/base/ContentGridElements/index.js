import React from 'react'
import PropTypes from 'prop-types'
import Grid from '../../helper/Grid'

const ContentGridElements = ({Children}) => (
  <div className="content-grid-elements">
    <Grid grid={Children}/>
  </div>
)

ContentGridElements.propTypes = {
  Children: PropTypes.object.isRequired
}

export default ContentGridElements
