import React from 'react'
import './MainBody.css'

import QuestionsContainer from './QuestionsContainer/QuestionsContainer.jsx'

class MainBody extends React.Component {
  render() {
    return(
      <div className='content-wrapper'>
        <QuestionsContainer questions={this.props.questions} getAllQuestions={this.props.getAllQuestions}/>
        <div className='right-side'></div>
      </div>
    )
  }
}

export default MainBody
