import React from 'react';
import { YMaps, Placemark, Map } from 'react-yandex-maps';
import { connect } from 'react-redux';
import { removeDot, rearrangeDots } from '../actions/rootActions.js'

function Marker(props) {
  return (
    <Placemark
      geometry={props.coords}
      modules={["geoObject.addon.hint"]}
      options={{
        draggable: true
      }}
      properties={{
        hintContent: "1 Собственный значок метки",
        id: "123"
      }}
    >
    </Placemark>
  );
}

export default Marker;
