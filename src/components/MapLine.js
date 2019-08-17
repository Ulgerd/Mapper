import React from 'react';
import { Polyline } from 'react-yandex-maps';

export function MapLine(props) {
  return (
    <Polyline
      geometry={props.coords}
      options={{
        strokeColor: "#000",
        strokeWidth: 4,
        strokeOpacity: 0.5
      }}
    />
  );
}

export default MapLine;
