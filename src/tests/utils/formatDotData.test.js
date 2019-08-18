import { strToArr, formatDotData } from '../../utils/formatDotData.js';

jest.mock('nanoid', () => jest.fn(() => '4'))

describe('strToArr tests',()=>{
  it('should return correct value', () => {
    expect(strToArr('-15.1 14.2')).toEqual([14.2, -15.1])
  })
  it('should return correct value', () => {
    expect(strToArr('-2.1 1.2')).toEqual([1.2, -2.1])
  })
  it('should return correct value', () => {
    expect(strToArr('-155.1 124.2')).toEqual([124.2, -155.1])
  })
});

describe('formatDotData tests',()=>{
  let geoObject = {Point: {pos: "37.617635 55.755814"},
    metaDataProperty: {GeocoderMetaData: {Address: {formatted: 'Россия, Москва'}}}
  }
  it('should return correct value', () => {
    expect(formatDotData(geoObject)).toEqual({id: '4', name: 'Россия, Москва', coords: [55.755814, 37.617635]})
  })
});
