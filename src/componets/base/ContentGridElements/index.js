import React from 'react'
import PropTypes from 'prop-types'
import Grid from '../../helper/Grid'

import './ContentGridElements.scss'

const ContentGridElements = ({Children, path}) => (
  <div className="content-grid-elements">
    <Grid
      grid={Children}
      path={path}
      itemWrap={true}
      itemWrapClass="content-grid-elements__item"
    />
  </div>
)

ContentGridElements.propTypes = {
  path: PropTypes.arrayOf(PropTypes.string).isRequired,
  Children: PropTypes.object.isRequired
}

export default ContentGridElements
