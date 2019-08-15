import produce from "immer";

export const initialState = {
  dots: [], // [{x:, y:, name?}, {}, {}]
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {

    case 'SET_NEW_DOT':
      return produce(state, draft => {
        draft.dots.push(action.formData);
      })

    default:
      return state
  }
}
