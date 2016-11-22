import React from 'react'
import './AskQuestionsModal.css'

class AskQuestionsModal extends React.Component {
  render() {
    return(
      <div className='ask-question-modal'>
        <header>Ask a Question!</header>

        <div className='input-question-container'>

          <div className='input-title'>
            <p>Title</p>
            <textarea id='title' rows="1" cols="70" placeholder="TLDR of your question!"></textarea>
          </div>
          <div className='input-question'>
            <p>Question</p>
            <textarea id='question' rows="22" cols="70" placeholder="Write your question here!"></textarea>
          </div>
          <div className='input-tags'>
            <p>Tags</p>
            <textarea id='tags' rows="1" cols="70" placeholder="Separate each tag with a comma and a space!"></textarea>
          </div>

        </div>

        <div className='button-container'>
          <button className='cancel-question-btn'>I changed my mind...</button>
          <button className='ask-question-btn'>Ask away!</button>
        </div>
      </div>
    )
  }
}

export default AskQuestionsModal
