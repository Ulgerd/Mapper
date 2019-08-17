import React from 'react';
import { mount } from 'enzyme'
import { Header } from '../../components/Header.js';
import renderer from 'react-test-renderer';

describe('Header component tests',()=>{
    let wrapper

    beforeEach(()=>{
        wrapper = mount(<Header />)
    })

    it('render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('contains h1', () => {
        expect(wrapper.find('h1')).toHaveLength(1)
    });

    it(`component's h1 have proper value`, () => {
      expect(wrapper.find('h1').text()).toEqual('Mapper');
    });

    it('renders correctly', () => {
      const tree = renderer
        .create(<Header />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
});
