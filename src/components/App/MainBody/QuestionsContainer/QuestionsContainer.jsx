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

const QuestionsContainer = props => {
  console.log(props);
  const questions = props.questions.map((q, i) => {
    return (
      <Questions

      />
    )
  });

  return(
    <div className='questions-container'>
      <button className='reAsk-button' onClick={this.askQuestion.bind(this)}>reAsk Something!</button>
      <div className='questions'>
        {this.renderQuestionList()}
      </div>
    </div>
  );
}

export default QuestionsContainer
