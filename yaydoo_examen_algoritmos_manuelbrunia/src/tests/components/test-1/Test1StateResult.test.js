import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { Test1StateResult } from '../../../components/test-1/Test1StateResult';

describe("Test on <Test1StateResult/>", ()=>{

    test('SnapShot of <Test1StateResult/>', ()=>{
        const wrapper = shallow(<Test1StateResult resultAlice={1} resultBob={2} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Alices Win', ()=>{
        const wrapper = shallow(<Test1StateResult resultAlice={2} resultBob={1} />);
        expect(wrapper.find("h2").text()).toBe("Gana Alice");
    })

    test('Bob Win', ()=>{
        const wrapper = shallow(<Test1StateResult resultAlice={1} resultBob={2} />);
        expect(wrapper.find("h2").text()).toBe("Gana Bob");
    })
    
    test('Is Draw', ()=>{
        const wrapper = shallow(<Test1StateResult resultAlice={2} resultBob={2} />);
        expect(wrapper.find("h2").text()).toBe("Hay empate");
    })
})