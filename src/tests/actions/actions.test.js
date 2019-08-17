import * as actions from "../../actions/rootActions.js"
import * as types from "../../actions/actionTypes.js"
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('actions tests', () => {
  it('SET_NEW_DOT should create an action', () => {
    let formData = 'Finish docs'
    let expectedAction = {
      type: types.SET_NEW_DOT,
      formData
    }
    expect(actions.setNewDot(formData)).toEqual(expectedAction)
  })

  it('REMOVE_DOT should create an action', () => {
    let dotPos = 'Finish docs'
    let expectedAction = {
      type: types.REMOVE_DOT,
      dotPos
    }
    expect(actions.removeDot(dotPos)).toEqual(expectedAction)
  })

  it('REARRANGE_DOTS should create an action', () => {
    let dotsArr = 'Finish docs'
    let expectedAction = {
      type: types.REARRANGE_DOTS,
      dotsArr
    }
    expect(actions.rearrangeDots(dotsArr)).toEqual(expectedAction)
  })

  it('UPDATE_DOT_DATA should create an action', () => {
    let dotIndex = 'Finish docs';
    let coords = [123];
    let address = 'Moscow';
    let expectedAction = {
      type: types.UPDATE_DOT_DATA,
      dotIndex,
      coords,
      address,
    }
    expect(actions.updateDotData(dotIndex, coords, address)).toEqual(expectedAction)
  })
})
