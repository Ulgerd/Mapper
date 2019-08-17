import React from 'react';
import { App } from '../../components/App.js';
import renderer from 'react-test-renderer'

jest.mock('../../components/Input', () => 'Input')
jest.mock('../../components/List', () => 'List')
jest.mock('../../components/Mapper', () => 'Mapper')
jest.mock('../../components/Header', () => 'Header')


describe('App component tests',()=>{
    it('renders correctly', () => {
      let cat = renderer
        .create(<App />)
        .toJSON();
      expect(cat).toMatchSnapshot();
    });
});
