import React from 'react';
import { mount } from 'enzyme'
import { Input } from '../../components/Input.js';
import renderer from 'react-test-renderer';

describe('Input component tests',()=>{
    let wrapper

    beforeEach(()=>{
        wrapper = mount(<Input />)
    })

    it('render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('contains div', () => {
        expect(wrapper.find('div')).toHaveLength(1)
    });

    it('contains input', () => {
        expect(wrapper.find('input')).toHaveLength(1)
    });

    it('renders correctly', () => {
      const tree = renderer
        .create(<Input />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
});
