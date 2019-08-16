import React from 'react';
import { YMaps, Placemark, Map } from 'react-yandex-maps';
import { connect } from 'react-redux';
import { removeDot, rearrangeDots } from '../actions/rootActions.js'
import Marker from './Marker.js';

function Mapper(props) {
  let center = props.dots.length > 0 ?
                props.dots[props.dots.length-1].coords :
                [55.75, 37.57];
  let mapState = { center: center, zoom: 9 };

  return (
    <YMaps>
      <div>
        <Map
          state={mapState}
        >
          {props.dots.map((dotObj,i) => {
            return <Marker
                    key={i}
                    coords={dotObj.coords}
                    name={dotObj.name}
              />
          })}
        </Map>
      </div>
    </YMaps>
  );
}


const mapStateToProps = store => {
  return {
    dots: store.dots,
  }
}

const mapDispatchToProps = dispatch => ({
  removeDot: (dotPos) => {dispatch(removeDot(dotPos))},
  rearrangeDots: (dotsArr) => {dispatch(rearrangeDots(dotsArr))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Mapper);
