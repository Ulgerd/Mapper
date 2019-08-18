import nanoid from 'nanoid';

export const strToArr = (str) => {
  let arr = str.split(' ').reverse();
  return arr.map((elem) => {
    return +elem;
  })
}

export const formatDotData = (geoObject) => {
  let id = nanoid(4);
  let point = strToArr(geoObject.Point.pos);
  let address = geoObject.metaDataProperty
                          .GeocoderMetaData
                          .Address
                          .formatted;

  return {id: id, name: address, coords: point};
};
