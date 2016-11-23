import React from 'react'
import './AskQuestionsModal.css'

class AskQuestionsModal extends React.Component {

  cancelQuestionBtn() {
    // Declare variables
    const askQuestionModal = document.querySelector('.ask-question-modal')
    const coverThePage = document.querySelector('.cover-the-page')

    // Hides the modal and opaque background
    askQuestionModal.style.display = 'none'
    coverThePage.style.display = 'none'
  }

  askQuestionBtn() {
    // Declare variables

    const askQuestionModal = document.querySelector('.ask-question-modal')
    const coverThePage = document.querySelector('.cover-the-page')
    const questions = document.querySelector('.questions')

    // Grabbing the values in each textarea
    let title = document.querySelector('#title').value
    let question = document.querySelector('#question').value
    let tags = document.querySelector('#tags').value


    if (title.value != "" && question.value != "") {

      // Hides the modal and opaque background
      askQuestionModal.style.display = 'none'
      coverThePage.style.display = 'none'

      // Puts the values into elements
      let newTitle = document.createElement('h3')
      newTitle.innerHTML = title
      let newQuestion = document.createElement('p')
      newQuestion.innerHTML = question
      let newTags = document.createElement('p')
      newTags.innerHTML = `tags: ${tags}`

      // Creates a container and appends all the previous information into it
      let questionContainer = document.createElement('div')
      questionContainer.className = 'question'
      questionContainer.append(newQuestion)
      questionContainer.append(newTags)
      questionContainer.prepend(newTitle)

      // Prepends the question into the container
      questions.prepend(questionContainer)

      // Reset values
      document.getElementById('title').value = ''
      document.getElementById('question').value = ''
      document.getElementById('tags').value = ''
    } else {
      console.log('somethings missing')
    }
  }

  render() {
    return(
      <div className='ask-question-modal'>
        <header>Ask a Question!</header>

        <div className='input-question-container'>

          <div className='input-title'>
            <p>Title *</p>
            <textarea id='title' rows="1" cols="70" placeholder="TLDR of your question!"></textarea>
          </div>
          <div className='input-question'>
            <p>Question *</p>
            <textarea id='question' rows="22" cols="70" placeholder="Write your question here!"></textarea>
          </div>
          <div className='input-tags'>
            <p>Tags</p>
            <textarea id='tags' rows="1" cols="70" placeholder="Separate each tag with a comma and a space!"></textarea>
          </div>
        </div>

        <div className='button-container'>
          <button className='cancel-question-btn' onClick={this.cancelQuestionBtn.bind(this)}>I changed my mind...</button>
          <button className='ask-question-btn' onClick={this.askQuestionBtn.bind(this)}>Ask away!</button>
        </div>
      </div>
    )
  }
}

export default AskQuestionsModal
