import './App.css';

import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { ACTIONS } from './reducers/rootReducer';

const questions = ["who", "what", "where", "when"]

const App: React.FC = () => {
  // data from redux store
  const who = useSelector((state: any) => state.who)
  const what = useSelector((state: any) => state.what)
  const where = useSelector((state: any) => state.where)
  const when = useSelector((state: any) => state.when)

  const currentQuestion = useSelector((state: any) => state.currentQuestion)

  // to dispatch actions
  const dispatch = useDispatch()

  // whether or not all questions have been answered
  let allQuestionsAnswered
  if (who && what && where && when) {
    allQuestionsAnswered = true
  } else {
    allQuestionsAnswered = false
  }

  const nextQuestion = () => {
    if (currentQuestion === 3) {
      dispatch({
        type: ACTIONS.SET_CURRENT_QUESTION,
        payload: {
          currentQuestion: 0,
        },
      })
    } else {
      dispatch({
        type: ACTIONS.SET_CURRENT_QUESTION,
        payload: {
          currentQuestion: currentQuestion + 1,
        },
      })
    }
  }

  const previousQuestion = () => {
    if (currentQuestion === 0) {
      dispatch({
        type: ACTIONS.SET_CURRENT_QUESTION,
        payload: {
          currentQuestion: 3,
        },
      })
    } else {
      dispatch({
        type: ACTIONS.SET_CURRENT_QUESTION,
        payload: {
          currentQuestion: currentQuestion - 1,
        },
      })
    }
  }

  // to get input element corresponding to current question
  const getInput = () => {
    if (currentQuestion === 0) {
      return (
        <input
          className="answer"
          type="text"
          value={who}
          onChange={(e) =>
            dispatch({
              type: ACTIONS.SET_WHO,
              payload: {
                who: e.target.value,
              },
            })
          }
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
          onChange={(e) =>
            dispatch({
              type: ACTIONS.SET_WHAT,
              payload: {
                what: e.target.value,
              },
            })
          }
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
          onChange={(e) =>
            dispatch({
              type: ACTIONS.SET_WHERE,
              payload: {
                where: e.target.value,
              },
            })
          }
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
          onChange={(e) =>
            dispatch({
              type: ACTIONS.SET_WHEN,
              payload: {
                when: e.target.value,
              },
            })
          }
          placeholder="your answer"
        />
      )
    }
  }

  // building output sentence
  const sentence = `${who} ${what} ${where} ${when}.`

  return (
    <div className="app">
      <div className="form">
        <span className="question">{`${questions[currentQuestion]}?`}</span>
        {getInput()}
      </div>
      <div className="buttons">
        <button onClick={nextQuestion}>Next Question</button>
        <button onClick={previousQuestion}>Previous Question</button>
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
