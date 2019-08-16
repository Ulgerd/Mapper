import React from 'react';
import { Placemark } from 'react-yandex-maps';

function Marker(props) {
  return (
    <Placemark
      geometry={props.coords}
      modules={["geoObject.addon.balloon"]}
      options={{
        draggable: true
      }}
      onDragEnd= {(e) => props.onDragEnd(e.originalEvent.target.geometry,
                                         props.dotIndex)}
      properties={{
        balloonContentHeader: `Точка №${props.dotIndex+1}`,
        balloonContent: props.name
      }}
    >
    </Placemark>
  );
}

export default Marker;
