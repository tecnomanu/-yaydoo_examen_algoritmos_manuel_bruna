import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { Test2Form } from '../../../components/test-2/Test2Form';

describe("Test on <Test2Form/>", ()=>{

    const setStringState = jest.fn();
    const default_string = "hola Hola Mundo";
    const wrapper = shallow(<Test2Form defaultInput={default_string} setStringState={setStringState}/>);

    test('SnapShot of <Test2Form/>', ()=>{
        expect(wrapper).toMatchSnapshot();
    })

    test('The button must call setStringState with string when has been clicked', ()=>{
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setStringState ).toHaveBeenCalledTimes(1)
        expect( setStringState ).toHaveBeenCalledWith(default_string);
    })

    test('Change string on textarea', ()=>{
        const wrapper_to_change = shallow(<Test2Form defaultInput={default_string} setStringState={setStringState}/>);
        const string_to_change = "Lorem lorem ipsum";
        wrapper_to_change.find('textarea').simulate('change', {
            target: {
                value: string_to_change,
                name: "stringInput"
            }
        });
        expect( wrapper_to_change.find('textarea').prop('value') ).toBe(string_to_change);
    })

})