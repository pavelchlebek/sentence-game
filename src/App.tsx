import './App.css';

import React from 'react';

const questions = ["who", "what", "where", "when"]

function App() {
  const [who, setWho] = React.useState("")
  const [what, setWhat] = React.useState("")
  const [where, setWhere] = React.useState("")
  const [when, setWhen] = React.useState("")

  let allQuestionsAnswered
  if (who && what && where && when) {
    allQuestionsAnswered = true
  } else {
    allQuestionsAnswered = false
  }

  const [currentQuestion, setCurrentQuestion] = React.useState(0)

  const nextQuestion = () => {
    if (currentQuestion === 3) {
      setCurrentQuestion(0)
    } else {
      setCurrentQuestion((prev) => prev + 1)
    }
  }

  const getInput = () => {
    if (currentQuestion === 0) {
      return (
        <input
          className="answer"
          type="text"
          value={who}
          onChange={(e) => setWho(e.target.value)}
          placeholder="your answer"
        />
      )
    }
    if (currentQuestion === 1) {
      return (
        <input
          className="answer"
          type="text"
          value={what}
          onChange={(e) => setWhat(e.target.value)}
          placeholder="your answer"
        />
      )
    }
    if (currentQuestion === 2) {
      return (
        <input
          className="answer"
          type="text"
          value={where}
          onChange={(e) => setWhere(e.target.value)}
          placeholder="your answer"
        />
      )
    }
    if (currentQuestion === 3) {
      return (
        <input
          className="answer"
          type="text"
          value={when}
          onChange={(e) => setWhen(e.target.value)}
          placeholder="your answer"
        />
      )
    }
  }

  const sentence = `${who} ${what} ${where} ${when}.`

  return (
    <div className="app">
      <div className="form">
        <span className="question">{`${questions[currentQuestion]}?`}</span>
        {getInput()}
        <button onClick={nextQuestion}>Next</button>
      </div>
      <div className="output">
        <div className={`indicator ${who ? "answered" : "notAnswered"}`}>
          Who: {who ? "Done" : "not answered yet"}
        </div>
        <div className={`indicator ${what ? "answered" : "notAnswered"}`}>
          What: {what ? "Done" : "not answered yet"}
        </div>
        <div className={`indicator ${where ? "answered" : "notAnswered"}`}>
          Where: {where ? "Done" : "not answered yet"}
        </div>
        <div className={`indicator ${when ? "answered" : "notAnswered"}`}>
          When: {when ? "Done" : "not answered yet"}
        </div>
        <div className="validator">
          <span className="left">All questions answered: </span>
          <span className="right">{allQuestionsAnswered ? "Yes" : "No"}</span>
        </div>
      </div>
      <div className="sentence">{allQuestionsAnswered && sentence}</div>
    </div>
  )
}

export default App
