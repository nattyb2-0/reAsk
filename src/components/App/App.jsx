import React from 'react'
import './App.css'
import AskQuestionsModal from './Modals/AskQuestionsModal/AskQuestionsModal.jsx'
import MainBody from './MainBody/MainBody.jsx'
import SignInModal from './Modals/SignInModal/SignInModal.jsx'

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







  hideCoverPage() {
    const askQuestionModal = document.querySelector('.ask-question-modal')
    const coverThePage = document.querySelector('.cover-the-page')

    askQuestionModal.style.display = 'none'
    coverThePage.style.display = 'none'
  }

  login() {

  }

  render() {
    return(
      <div className='page-container'>

        <AskQuestionsModal />
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
