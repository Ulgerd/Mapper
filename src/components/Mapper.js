import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import { connect } from 'react-redux';
import { rearrangeDots, updateDotData } from '../actions/rootActions.js'
import Marker from './Marker.js';
import MapLine from './MapLine.js';
import { coordsToStrReq } from './request.js'

function Mapper(props) {
  let center = props.dots.length > 0 ?
                props.dots[props.dots.length-1].coords :
                [55.75, 37.57];
  let mapState = { center: center, zoom: 9 };

  const onDragEnd = async (e, index) => {
    let coords = [...e.getCoordinates()];
    let address = await coordsToStrReq(e.getCoordinates())
    props.updateDotData(index, coords, address)
  }

  let lineCoords = props.dots.map((dot) => {
    return dot.coords;
  })

  return (
    <YMaps>
      <div>
        <Map
          state={mapState}
        >
          {props.dots.map((dotObj,i) => {
            return <Marker
                    key={i}
                    dotIndex = {i}
                    coords={dotObj.coords}
                    name={dotObj.name}
                    onDragEnd={onDragEnd}
              />
          })}
          <MapLine coords={lineCoords} />
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
  rearrangeDots: (dotsArr) => {dispatch(rearrangeDots(dotsArr))},
  updateDotData: (dotIndex, coords, address) => {dispatch(updateDotData(dotIndex, coords, address))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Mapper);
