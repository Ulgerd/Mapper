import React from 'react';
import { mount } from 'enzyme'
import { Footer } from '../../components/Footer.js';
import renderer from 'react-test-renderer';

describe('Footer component tests',()=>{
    let wrapper

    beforeEach(()=>{
        wrapper = mount(<Footer />)
    })

    it('render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('contains div', () => {
        expect(wrapper.find('div')).toHaveLength(1)
    });

    it('contains span', () => {
        expect(wrapper.find('span')).toHaveLength(3)
    });

    it('contains a', () => {
        expect(wrapper.find('a')).toHaveLength(3)
    });

    it('renders correctly', () => {
      const tree = renderer
        .create(<Footer />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
});
