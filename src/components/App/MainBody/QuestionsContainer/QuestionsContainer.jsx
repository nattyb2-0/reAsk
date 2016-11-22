import React from 'react'
import './QuestionsContainer.css'

import Questions from './Questions/Questions.jsx'

class QuestionsContainer extends React.Component {
  render() {
    return(
      <div className='questions-container'>
        <button className='reAsk-button'>reAsk Something!</button>
        <Questions />
      </div>
    )
  }
}

export default QuestionsContainer
