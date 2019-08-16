import React from 'react';
import { Polyline } from 'react-yandex-maps';

function MapLine(props) {
  return (
    <Polyline
      geometry={props.coords}
      options={{
        balloonCloseButton: false,
        strokeColor: "#000",
        strokeWidth: 4,
        strokeOpacity: 0.5
      }}
    />
  );
}

export default MapLine;