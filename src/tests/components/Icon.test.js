import React from 'react';
import { shallow } from 'enzyme'
import Icon from '../../components/Icon.js';
import renderer from 'react-test-renderer';

describe('Icon component tests',()=>{
    let wrapper

    const props = {
      fill: '#222',
      xlink: 'close'
    };

    beforeEach(()=>{
        wrapper = shallow(Icon(props))
    })

    it('render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('sets the svg element fill', () => {
      expect(wrapper.find('[fill="#222"]')).toHaveLength(1);
      expect(wrapper.find('[xlinkHref="icons.svg#close"]')).toHaveLength(1);
    });

    it('contains use', () => {
        expect(wrapper.find('use')).toHaveLength(1)
    });

    it('renders correctly', () => {
      const tree = renderer
        .create(<Icon />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
});
