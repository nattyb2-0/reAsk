import React from 'react'
import './App.css'

import AskQuestionsModal from './Modals/AskQuestionsModal/AskQuestionsModal.jsx'
import SignInModal from './Modals/SignInModal/SignInModal.jsx'
import SignUpModal from './Modals/SignUpModal/SignUpModal.jsx'
import MainBody from './MainBody/MainBody.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    fetch('/api/questions/')
    .then(data => data.json())
    .then(data => {
      this.setState({
        questions: data.questions
      });
    });
  }

// function to send a post to DB and add new question
createNewQuestion(question) {
  console.log('inside create new question');
  console.log('the OBJ of question -->> ', question);
  fetch('/api/questions', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(question)
  })
  // .then(this.setState({
  //   questionFormName: '',
  //   questionFormURL: ''
  // }))
  // .then(this.getAllQuestions())
  .catch(err => console.log(err));
}

  hideCoverPage() {
    const askQuestionModal = document.querySelector('.ask-question-modal')
    const createAccountModal = document.querySelector('.create-account-modal')
    const loginAccountModal = document.querySelector('.login-account-modal')
    const coverThePage = document.querySelector('.cover-the-page')

    askQuestionModal.style.display = 'none'
    coverThePage.style.display = 'none'
    createAccountModal.style.display = 'none'
    loginAccountModal.style.display = 'none'
  }

  login() {
    const createAccountModal = document.querySelector('.create-account-modal')
    const coverThePage = document.querySelector('.cover-the-page')

    createAccountModal.style.display = 'block'
    coverThePage.style.display = 'block'
  }

  render() {
    return(
      <div className='page-container'>

        <SignUpModal />
        <SignInModal />
        <AskQuestionsModal createNewQuestion={this.createNewQuestion}/>
        <div className='cover-the-page' onClick={this.hideCoverPage.bind(this)}></div>

        <div className='header-container'>
          <header className='main-header'>reAsk</header>
          <button className='login-btn' onClick={this.login.bind(this)}></button>
        </div>

        <MainBody />

      </div>
    )
  }
}

export default App
