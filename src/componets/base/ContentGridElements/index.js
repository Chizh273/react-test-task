import React from 'react'
import PropTypes from 'prop-types'
import Grid from '../../helper/Grid'

import './ContentGridElements.scss'

const ContentGridElements = ({Children}) => (
  <div className="content-grid-elements">
    <Grid grid={Children} wrap={true} wrapClass="content-grid-elements__item"/>
  </div>
)

ContentGridElements.propTypes = {
  Children: PropTypes.object.isRequired
}

export default ContentGridElements
