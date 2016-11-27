import React from 'react'
import './App.css'

//import all other smaller components that the parent wants to use
import AskQuestionsModal from './Modals/AskQuestionsModal/AskQuestionsModal.jsx'
import SignInModal from './Modals/SignInModal/SignInModal.jsx'
import SignUpModal from './Modals/SignUpModal/SignUpModal.jsx'
import MainBody from './MainBody/MainBody.jsx'

//create a component named app
class App extends React.Component {
//use the constructor function along with super to bring in all properties of parent
  constructor(props) {
    super(props);
    //set whatever initial states that will be changed or modified over time
      this.state = {
      questions: []
    }
  }
  // sorry guys, I hate erasing things I'm not commited to delete from my life
  // personal issues, nothing else hahahaha
  // {
  //   "id": 1,
  //   "username": "taka",
  //   "votes": 3,
  //   "question_title": "question about position: relative",
  //   "question_body": "what is this shit?",
  //   "question_tags": "css"
  // },
  // {
  //   "id": 2,
  //   "username": "synclair",
  //   "votes": 1,
  //   "question_title": "How do i use flexbox?",
  //   "question_body": "flexbox flexbox flexbox",
  //   "question_tags": "flexbox, css, html"
  // },
  // {
  //   "id": 3,
  //   "username": "natty",
  //   "votes": 6,
  //   "question_title": "What is react used for",
  //   "question_body": "Why can I not use something else other than react?",
  //   "question_tags": "react"
  // }

//function call to the api to retrieve all questions
getAllQuestions(){
  console.log('inside of getAllQuestions APPjsx ')
  fetch('/api/questions/')
  //data is returned in the form of json
    .then(data => data.json())
    .then(data => {
      console.log(data);
      // the state of the question array is updated and passed the value thats held in the
      // data object
      this.setState({
        questions: data
      });
      console.log('the true values of state --> ', this.state);
    })
     // .then(this.getAllQuestions())
    .catch(err => console.log(err));
}

//react method for when you are mounting/binding a function to be passed along to
// children components
// componentDidMount() {
//   console.log('inside componentDidMount of APP.jsx')
//    this.getAllQuestions;
//   }

// function to send a post to DB and add new question...fetches the data from api
// and sends a post request and then calls tge get all questions after wards
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
  .then(this.getAllQuestions)
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

        <MainBody
          getAllQuestions={this.getAllQuestions.bind(this)}
          questions={this.state.questions}
        />

      </div>
    )
  }
}

export default App
