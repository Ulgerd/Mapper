export const formatDotData = (geoObject) => {
  console.log(geoObject);
  let point = geoObject.Point;
  let address = geoObject.metaDataProperty.GeocoderMetaData.Address.formatted;
  return {name: address, coords: point};
};
