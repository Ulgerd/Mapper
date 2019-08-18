import { strToCoordsReq, coordsToStrReq } from '../../utils/request.js';

import axios from 'axios';

jest.mock('axios');

it('strToCoordsReq should work properly', () => {
  const result = [{GeoObject:{metaDataProperty:{GeocoderMetaData:{Address:{formatted:"Россия, Московская область"}}}}}];
  const resp = {data: {response:{GeoObjectCollection: {featureMember:[{GeoObject:{metaDataProperty:{GeocoderMetaData:{Address:{formatted:"Россия, Московская область"}}}}}]}}}};
  axios.get.mockResolvedValue(resp);

  strToCoordsReq().then(data => expect(data).toEqual(result));
});

it('coordsToStrReq should work properly', () => {
  const result = "Россия, Московская область";
  const resp = {data: {response:{GeoObjectCollection: {featureMember:[{GeoObject:{metaDataProperty:{GeocoderMetaData:{Address:{formatted:"Россия, Московская область"}}}}}]}}}};
  axios.get.mockResolvedValue(resp);

  coordsToStrReq([15,16]).then(data => expect(data).toEqual(result));
});
