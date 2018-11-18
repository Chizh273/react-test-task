import React from 'react'
import ModalContext from './ModalContext'

const ModalConnector = (Component) => (props) => (
  <ModalContext.Consumer>
    {
      ({updatePath, path}) => (
        <Component
          {...props}
          contextModalUpdatePath={updatePath}
          contextModalPath={path}
        />
      )
    }
  </ModalContext.Consumer>
)

export default ModalConnector
