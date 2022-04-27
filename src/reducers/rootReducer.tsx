import { AnyAction } from 'redux';

export interface IState {
  who: string
  what: string
  where: string
  when: string
  currentQuestion: number
}

const initialState: IState = {
  who: "",
  what: "",
  where: "",
  when: "",
  currentQuestion: 0,
}

export const ACTIONS = {
  SET_WHO: "SET_WHO",
  SET_WHAT: "SET_WHAT",
  SET_WHERE: "SET_WHERE",
  SET_WHEN: "SET_WHEN",
  SET_CURRENT_QUESTION: "SET_CURRENT_QUESTION",
}

export function rootReducer(state: IState = initialState, action: AnyAction) {
  switch (action.type) {
    case ACTIONS.SET_WHO:
      return {
        ...state,
        who: action.payload,
      }
    case ACTIONS.SET_WHAT:
      return {
        ...state,
        what: action.payload,
      }
    case ACTIONS.SET_WHERE:
      return {
        ...state,
        where: action.payload,
      }
    case ACTIONS.SET_WHEN:
      return {
        ...state,
        when: action.payload,
      }
    case ACTIONS.SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload,
      }
    default:
      return state
  }
}
