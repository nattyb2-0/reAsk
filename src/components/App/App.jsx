import React from 'react'
import './App.css'

import AskQuestionsModal from './Modals/AskQuestionsModal/AskQuestionsModal.jsx'
import MainBody from './MainBody/MainBody.jsx'

class App extends React.Component {

  hideCoverPage() {
    const askQuestionModal = document.querySelector('.ask-question-modal')
    const coverThePage = document.querySelector('.cover-the-page')

    askQuestionModal.style.display = 'none'
    coverThePage.style.display = 'none'
  }

  render() {
    return(
      <div className='page-container'>

        <AskQuestionsModal />
        <div className='cover-the-page' onClick={this.hideCoverPage.bind(this)}></div>

        <header className='main-header'>reAsk</header>

        <MainBody />

      </div>
    )
  }
}

export default App
