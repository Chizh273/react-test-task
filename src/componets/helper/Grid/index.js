import React from 'react'
import PropTypes from 'prop-types'
import Element from '../Element'
import mapToArray from '../../../utils/mapToArray'

const Grid = ({grid, wrap = false, wrapClass = ''}) =>
  mapToArray(grid).map(item => {
    const element = (
      <Element
        key={item.id}
        Content={item.Content}
        Children={item.Children}
      />
    )

    return wrap
      ? <div key={item.id} className={wrapClass}>{element}</div>
      : element
  })

Grid.propTypes = {
  grid: PropTypes.object,
  wrap: PropTypes.bool,
  wrapClass: PropTypes.string
}

export default Grid
