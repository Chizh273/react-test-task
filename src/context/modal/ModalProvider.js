import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ModalContext from './ModalContext'

class ModalProvider extends Component {

  constructor(...args) {
    super(...args)

    this.state = {
      updatePath: this.handleUpdatePath,
      path: []
    }
  }

  handleUpdatePath = (path) => this.setState({path})

  render() {
    const {children} = this.props

    return (
      <ModalContext.Provider value={this.state}>
        {children}
      </ModalContext.Provider>
    )
  }
}

ModalProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ModalProvider
