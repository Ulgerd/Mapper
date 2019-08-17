import React from 'react';
import { shallow } from 'enzyme'
import {ListStr} from '../../components/ListStr.js';
import renderer from 'react-test-renderer';
jest.mock('../../components/Icon', () => 'Icon')

jest.mock('react-beautiful-dnd', () => ({
  Droppable: ({ children }) => children({
    draggableProps: {
      style: {},
    },
    innerRef: jest.fn(),
  }, {}),
  Draggable: ({ children }) => children({
    draggableProps: {
      style: {},
    },
    innerRef: jest.fn(),
  }, {}),
  DragDropContext: ({ children }) => children,
}));

describe('ListStr component tests',()=>{
    let wrapper

    const props = {
      key: 123,
      id: 123,
      index: 4,
      name: 'Moscow',
      onDotRemove: () => {console.log(1)}
    };

    beforeEach(()=>{
        wrapper = shallow(<ListStr {...props}/>)
    })

    it('render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('contains Draggable', () => {
      expect(wrapper.find('Draggable')).toHaveLength(1)
    });

    it('sets the svg element fill', () => {
      expect(wrapper.find('[draggableId=123]')).toHaveLength(1);
      expect(wrapper.find('[index=4]')).toHaveLength(1);
    });

    it('renders correctly', () => {
      const tree = renderer
        .create(<ListStr {...props} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
});
