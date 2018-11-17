import React from 'react'
import PropTypes from 'prop-types'
import Element from '../Element'
import mapToArray from '../../../utils/mapToArray'

const Grid = ({grid}) => mapToArray(grid).map(item => (
  <Element
    key={item.id}
    Content={item.Content}
    Children={item.Children}
  />
))

Grid.propTypes = {
  grid: PropTypes.object
}

export default Grid
