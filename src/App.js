import React, { Component } from 'react'
import Grid from './componets/helper/Grid'

import data from './data.json'
import './App.scss'

class App extends Component {
  state = {data}

  render () {
    const {data} = this.state

    return <Grid grid={data}/>
  }
}

export default App
