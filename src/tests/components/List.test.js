import React from 'react';
import { shallow } from 'enzyme'
import { List } from '../../components/List.js';
import renderer from 'react-test-renderer';
jest.mock('../../components/ListStr', () => 'ListStr')

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

describe('List component tests',()=>{
    let wrapper

    const props = {
      dots: [{id: 123, name: 'Moscow', coords: [14.2, 44.1]},
             {id: 321, name: 'Istanbul', coords: [42.2, 14.1]}]
    };

    beforeEach(()=>{
        wrapper = shallow(<List {...props} />)
    })

    it('render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });

    // it('contains ul', () => {
    //   expect(wrapper.find('ul')).toHaveLength(1)
    // });
    //
    // it('contains ListStr', () => {
    //   expect(wrapper.find('ListStr')).toHaveLength(2)
    // });

    it('renders correctly', () => {
      const tree = renderer
        .create(<List {...props} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
});
