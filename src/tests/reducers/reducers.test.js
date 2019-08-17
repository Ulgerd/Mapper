import {rootReducer, initialState} from '../../reducers/rootReducer.js'
import * as types from '../../actions/actionTypes.js'
import {cleanup} from '@testing-library/react';

afterEach(() => {
  cleanup();
});

describe('reducer test', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({
      ...initialState
    })
  })

  it('should handle SET_NEW_DOT', () => {
    expect(rootReducer({dots: []}, {
      type: types.SET_NEW_DOT,
      formData:
        {
          "ID": 0,
          "Name": "foo"
        }
      ,
    })).toEqual({
      dots: [
        {
          "ID": 0,
          "Name": "foo"
        }
      ],
    })
  })

  it('should handle REMOVE_DOT', () => {
    expect(rootReducer({dots: [{id:1}, {id:2}]}, {
      type: types.REMOVE_DOT,
      dotPos: 0
    })).toEqual({
      dots: [{id:2}],
    })
  })

  it('should handle REARRANGE_DOTS', () => {
    expect(rootReducer({dots: [{id:1}, {id:2}, {id:3}]}, {
      type: types.REARRANGE_DOTS,
      dotsArr: [{id:3}, {id:2}, {id:1}]
    })).toEqual({
      dots: [{id:3}, {id:2}, {id:1}]
    })
  })

  it('should handle UPDATE_DOT_DATA', () => {
    expect(rootReducer({dots: [
                                {id:1, name: 'foo', coords:[12]},
                                {id:2, name: 'bar', coords:[11]},
                                {id:3, name: 'baz', coords:[10]}]}, {
      type: types.UPDATE_DOT_DATA,
      dotIndex: 1,
      address: 'cat',
      coords: [9]
    })).toEqual({
      dots: [
            {id:1, name: 'foo', coords:[12]},
            {id:2, name: 'cat', coords:[9]},
            {id:3, name: 'baz', coords:[10]}]}
    )
  })
})
