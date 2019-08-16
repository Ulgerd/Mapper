import axios from 'axios';

const API = 'd0b1d43b-a7b4-4827-807f-2ef3583fd7a2';

const url = `https://geocode-maps.yandex.ru/1.x/?apikey=${API}&format=json&geocode=`

const arrToStr = (arr) => {
  return arr.reverse().join(',');
}

export const strToCoordsReq = async (location) => {
  const result = await axios.get(`${url}${location}&results=1`)
  return result.data
      .response
      .GeoObjectCollection
      .featureMember;
};

export const coordsToStrReq = async (coords) => {
  let newCoords = arrToStr(coords);
  const result = await axios.get(`${url}${newCoords}&results=1`)
  return result.data
                .response
                .GeoObjectCollection
                .featureMember[0]
                .GeoObject
                .metaDataProperty
                .GeocoderMetaData
                .Address
                .formatted;
};
