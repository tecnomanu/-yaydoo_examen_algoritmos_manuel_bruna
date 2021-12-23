import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { Test2Console } from '../../../components/test-2/Test2Console';

describe("Test on <Test2Console/>", ()=>{

    test('SnapShot of <Test1Console/>', ()=>{
        const wrapper = shallow(<Test2Console words={{"hola" : 2, "mundo" : 1}} str={"hola Hola Mundo"} />);
        expect(wrapper).toMatchSnapshot();
    })

})