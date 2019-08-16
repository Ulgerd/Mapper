import axios from 'axios';

const API = 'd0b1d43b-a7b4-4827-807f-2ef3583fd7a2';

const arrToNum = (arr) => {
  return arr.reverse().join(',');
}

export const strToCoordsReq = async (location) => {
  const result = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${API}&format=json&geocode=${location}&results=1`)
  return result;
};

export const coordsToStrReq = async (coords) => {
  let newCoords = arrToNum(coords);
  const result = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${API}&format=json&geocode=${newCoords}&results=1`)
  return result.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.formatted;
};
