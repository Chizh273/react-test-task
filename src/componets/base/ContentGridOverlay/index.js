import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Tab } from 'semantic-ui-react'

import Element from '../../helper/Element'
import mapToArray from '../../../utils/mapToArray'

const ContentGridOverlay = ({Children}) => {
  const panes = mapToArray(Children).map(item => ({
    menuItem: item.title,
    render: () => <Element
      Content={item.Content}
      Children={item.Children}
    />
  }))

  return (
    <Modal>
      <Modal.Content>
        <Tab menu={{secondary: true, pointing: true}} panes={panes}/>
      </Modal.Content>
    </Modal>
  )
}

ContentGridOverlay.propTypes = {
  Children: PropTypes.object.isRequired
}

export default ContentGridOverlay
