import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from '../views/not-found/NotFound.js';
import {shallow} from 'enzyme';

it('renders without crashing', () => {

  const wrap = shallow(<NotFound />);
  //wrap.find(".test");
  
  expect(
  	//wrap.find(".test").contains("Vennligst")).toEqual(true);
  	//wrap.find("Button").contains("HAHA")).toEqual(true);
  	//wrap.find(".test"));
)

  
  button.simulate('click');
  expect(wrap.state('myFunction')).toBe(true);

});

