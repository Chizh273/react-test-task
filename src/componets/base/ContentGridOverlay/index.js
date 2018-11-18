import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Tab } from 'semantic-ui-react'
import isEqual from 'lodash/isEqual'
import findIndex from 'lodash/findIndex'

import ModalConnector from '../../../context/modal/ModalConnector'
import Element from '../../helper/Element'
import mapToArray from '../../../utils/mapToArray'

class ContentGridOverlay extends Component {

  state = {
    modalOpen: false,
    tabIndex: null
  }

  componentDidUpdate(prevProps) {
    const contextModalPath = this.props.contextModalPath.slice(0, -2)
    const path = this.props.path.slice(0, -1)

    if (prevProps !== this.props) {
      isEqual(contextModalPath, path)
        ? this.openModal()
        : this.closeModal()
    }
  }

  openModal() {
    const id = this.props.contextModalPath.slice(-1)[0]
    const tabs = this.getTabPanes()
    const tabIndex = findIndex(tabs, item => item.id === id)
    console.log(tabIndex)

    return this.setState({modalOpen: true, tabIndex})
  }

  closeModal() {
    this.setState({modalOpen: false, tabIndex: null})
  }

  getTabPanes() {
    const {Children, path} = this.props

    return mapToArray(Children).map(item => ({
      id: item.id,
      menuItem: item.Content.title,
      render: () => <Element
        path={[...path, item.id]}
        Content={item.Content}
        Children={item.Children}
      />
    }))
  }

  handleCloseModal = () => this.props.contextModalUpdatePath([])

  handleTabChange = (e, data) => this.setState({tabIndex: data.activeIndex})

  render() {
    return (
      <Modal size="large" open={this.state.modalOpen} onClose={this.handleCloseModal}>
        <Modal.Content>
          <Tab
            activeIndex={this.state.tabIndex}
            onTabChange={this.handleTabChange}
            menu={{secondary: true, pointing: true}}
            panes={this.getTabPanes()}
          />
        </Modal.Content>
      </Modal>
    )
  }
}

ContentGridOverlay.propTypes = {
  path: PropTypes.arrayOf(PropTypes.string).isRequired,
  contextModalUpdatePath: PropTypes.func.isRequired,
  contextModalPath: PropTypes.array.isRequired,
  Children: PropTypes.object.isRequired,
}

export default ModalConnector(ContentGridOverlay)
