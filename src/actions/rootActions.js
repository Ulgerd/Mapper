import {
  SET_NEW_DOT,
} from './actionTypes';

export function setNewDot(formData) {
  return {
    type: SET_NEW_DOT,
    formData,
  }
}
