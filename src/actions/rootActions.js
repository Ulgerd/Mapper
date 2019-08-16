import {
  SET_NEW_DOT,
  REMOVE_DOT,
  REARRANGE_DOTS,
} from './actionTypes';

export function setNewDot(formData) {
  return {
    type: SET_NEW_DOT,
    formData,
  }
}

export function removeDot(dotPos) {
  return {
    type: REMOVE_DOT,
    dotPos,
  }
}

export function rearrangeDots(dotsArr) {
  return {
    type: REARRANGE_DOTS,
    dotsArr,
  }
}
