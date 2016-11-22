import React from 'react'
import './App.css'

import MainBody from './MainBody/MainBody.jsx'

class App extends React.Component {
  render() {
    return(
      <div className='page-container'>

        <div className='cover-the-page'></div>

        <header className='main-header'>reAsk</header>

        <MainBody />

      </div>
    )
  }
}

export default App
