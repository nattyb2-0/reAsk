import React from 'react'
import './QuestionsContainer.css'

import Questions from './Questions/Questions.jsx'

// class QuestionsContainer extends React.Component {

//   askQuestion() {
//     const askQuestionModal = document.querySelector('.ask-question-modal')
//     const coverThePage = document.querySelector('.cover-the-page')

//     askQuestionModal.style.display = 'block'
//     coverThePage.style.display = 'block'
//   }

// // <Questions
// //           key={i}
// //           votes={q.votes}
// //           question_title={q.question_title}
// //           question_body={q.question_body}
// //           question_tags={q.question_tags}
// //         />
//   // function takes the props of all questions
//   renderQuestionList() {
//     console.log('inside renderQuestionList, these are the props --> ', this.props);
//     // this.props.getAllQuestions();
//       // this.props.questions.map((q, i) => {
//       this.props.questions.forEach((q, i) => {
//         return (
//           <h1>{i}</h1>
//         );
//       })
//   }

//   render() {
//     return(
//       <div className='questions-container'>
//         <button className='reAsk-button' onClick={this.askQuestion.bind(this)}>reAsk Something!</button>
//         <div className='questions'>
//           {this.renderQuestionList()}
//         </div>
//       </div>
//     )
//   }
// }

// sorry I had to recreate everything to make sure I was doing the right process.
// creating a stateless function to append iterated elements to React Components
const QuestionsContainer = props => {
  // am I passing props correctly?
  console.log('these are the props inside Questions -->', props);
  // creating a function that maps through the movies array
  const renderQuestions = props.questions.map((q, i) => {
    return (
      <Questions
        key={i}
        votes={q.votes}
        question_title={q.question_title}
        question_body={q.question_body}
        question_tags={q.question_tags}
      />
    )
  });


  const askQuestion = () => {
    const askQuestionModal = document.querySelector('.ask-question-modal')
    const coverThePage = document.querySelector('.cover-the-page')

    askQuestionModal.style.display = 'block'
    coverThePage.style.display = 'block'
  }

  return(
    <div className='questions-container'>
      <button className='reAsk-button' onClick={askQuestion.bind(this)}>reAsk Something!</button>
      <div className='questions'>
        {renderQuestions}
      </div>
    </div>
  );
}

export default QuestionsContainer
