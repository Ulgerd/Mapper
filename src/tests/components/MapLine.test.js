import React from 'react';
import { MapLine } from '../../components/MapLine.js';
import renderer from 'react-test-renderer'

import {YMaps, Map, Polyline } from 'react-yandex-maps';

// null =(

describe('MapLine component tests',()=>{
    it('renders correctly', () => {
      let cat = renderer
        .create(
          <YMaps>
          <Map           width={'40em'}
                    height={'40em'}
                    state={{center: [55.75, 37.57], zoom: 9}}>
          <MapLine/>
          </Map>
</YMaps>
        )
        .toJSON();
      expect(cat).toMatchSnapshot();
    });
});
