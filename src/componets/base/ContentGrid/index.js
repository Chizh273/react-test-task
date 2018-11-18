import React from 'react'
import PropTypes from 'prop-types'
import Grid from '../../helper/Grid'

const ContentGrid = ({Children, path}) => <Grid grid={Children} path={path}/>

ContentGrid.propTypes = {
  path: PropTypes.arrayOf(PropTypes.string).isRequired,
  Children: PropTypes.shape({
    GridElements: PropTypes.object.isRequired,
    GridDetails: PropTypes.object.isRequired
  }).isRequired
}

export default ContentGrid
