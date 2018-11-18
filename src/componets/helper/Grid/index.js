import React from 'react'
import PropTypes from 'prop-types'
import Element from '../Element'
import mapToArray from '../../../utils/mapToArray'

const Grid = ({grid, path, itemWrap = false, itemWrapClass = ''}) =>
  mapToArray(grid).map(item => {
    const element = (
      <Element
        key={item.id}
        path={[...path, item.id]}
        Content={item.Content}
        Children={item.Children}
      />
    )

    return itemWrap
      ? <div key={item.id} className={itemWrapClass}>{element}</div>
      : element
  })

Grid.propTypes = {
  grid: PropTypes.object.isRequired,
  path: PropTypes.arrayOf(PropTypes.string).isRequired,
  itemWrap: PropTypes.bool,
  itemWrapClass: PropTypes.string
}

export default Grid
