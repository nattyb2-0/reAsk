import React from 'react'
import './Questions.css'

class Questions extends React.Component {
  render() {
    return(
      <div className='question'>
        <div className='upvote-arrow'>
          <img src='http://i.imgur.com/nFn8U6a.png' />
          <p>1</p>
        </div>
        <div className='question-content'>
          <h3>How do you make flexbox work</h3>
          <p>I kept trying over and over and shit just dont work fam</p>
          <p>tags: HTML, CSS, Flexbox</p>
        </div>
      </div>
    )
  }
}

export default Questions
