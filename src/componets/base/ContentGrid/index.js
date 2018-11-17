import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Grid from '../../helper/Grid'

const ContentGrid = ({Children}) => (
  <Fragment>
    <Grid grid={Children} />
  </Fragment>
)

ContentGrid.propTypes = {
  Children: PropTypes.shape({
    GridElements: PropTypes.object.isRequired,
    GridDetails: PropTypes.object.isRequired
  }).isRequired
}

export default ContentGrid
