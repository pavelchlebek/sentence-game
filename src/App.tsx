import './App.css';

import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  ACTIONS,
  IState,
} from './reducers/rootReducer';

const questions = ["who", "what", "where", "when"]

const App: React.FC = () => {
  // data from redux store
  const who = useSelector<IState, IState["who"]>((state) => state.who)
  const what = useSelector<IState, IState["what"]>((state) => state.what)
  const where = useSelector<IState, IState["where"]>((state) => state.where)
  const when = useSelector<IState, IState["when"]>((state) => state.when)

  const currentQuestion = useSelector<IState, IState["currentQuestion"]>(
    (state) => state.currentQuestion
  )

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
    if (currentQuestion === questions.length - 1) {
      dispatch({
        type: ACTIONS.SET_CURRENT_QUESTION,
        payload: 0,
      })
    } else {
      dispatch({
        type: ACTIONS.SET_CURRENT_QUESTION,
        payload: currentQuestion + 1,
      })
    }
  }

  const previousQuestion = () => {
    if (currentQuestion === 0) {
      dispatch({
        type: ACTIONS.SET_CURRENT_QUESTION,
        payload: 3,
      })
    } else {
      dispatch({
        type: ACTIONS.SET_CURRENT_QUESTION,
        payload: currentQuestion - 1,
      })
    }
  }

  // building output sentence
  const sentence = `${who} ${what} ${where} ${when}.`

  const currentQuestionString = questions[currentQuestion]

  const currentQuestionValue = useSelector(
    (state: IState) => state[currentQuestionString as keyof typeof state]
  )

  const currentActionType = `SET_${currentQuestionString.toUpperCase()}`

  return (
    <div className="app">
      <div className="form">
        <span className="question">{`${questions[currentQuestion]}?`}</span>
        <input
          className="answer"
          type="text"
          value={currentQuestionValue}
          onChange={(e) =>
            dispatch({
              type: currentActionType,
              payload: e.target.value,
            })
          }
          placeholder="your answer"
        />
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
