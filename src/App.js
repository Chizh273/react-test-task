import React, { Component } from 'react'
import ModalProvider from './context/modal/ModalProvider'
import Grid from './componets/helper/Grid'

import data from './data.json'
import './App.scss'

class App extends Component {
  state = {data}

  render () {
    const {data} = this.state

    return (
      <ModalProvider>
        <Grid
          grid={data}
          path={[]}
        />
      </ModalProvider>
    )
  }
}

export default App
