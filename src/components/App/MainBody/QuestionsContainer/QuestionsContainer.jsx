import React from 'react'
import './QuestionsContainer.css'

import Questions from './Questions/Questions.jsx'

class QuestionsContainer extends React.Component {

  askQuestion() {
    console.log('reAsk button clicked')

    const askQuestionModal = document.querySelector('.ask-question-modal')
    const coverThePage = document.querySelector('.cover-the-page')

    askQuestionModal.style.display = 'block'
    coverThePage.style.display = 'block'
  }

  render() {
    return(
      <div className='questions-container'>
        <button className='reAsk-button' onClick={this.askQuestion.bind(this)}>reAsk Something!</button>
        <div className='questions'>
          <Questions />
          <Questions />
          <Questions />
          <Questions />
          <Questions />
          <Questions />
          <Questions />
          <Questions />
          <Questions />
          <Questions />
          <Questions />
        </div>
      </div>
    )
  }
}

export default QuestionsContainer
