import produce from "immer";

export const initialState = {
  dots: [], // [{}, {}]
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {

    case 'SET_NEW_DOT':
      return produce(state, draft => {
        draft.dots.push(action.formData);
      })

    case 'REMOVE_DOT':
      return produce(state, draft => {
        draft.dots.splice(action.dotPos, 1);
      })

    case 'REARRANGE_DOTS':
      return produce(state, draft => {
        draft.dots = action.dotsArr;
      })

    default:
      return state
  }
}
