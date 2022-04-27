const initialState = {
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

export function rootReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case ACTIONS.SET_WHO:
      return {
        ...state,
        who: action.payload.who,
      }
    case ACTIONS.SET_WHAT:
      return {
        ...state,
        what: action.payload.what,
      }
    case ACTIONS.SET_WHERE:
      return {
        ...state,
        where: action.payload.where,
      }
    case ACTIONS.SET_WHEN:
      return {
        ...state,
        when: action.payload.when,
      }
    case ACTIONS.SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload.currentQuestion,
      }
    default:
      return state
  }
}
