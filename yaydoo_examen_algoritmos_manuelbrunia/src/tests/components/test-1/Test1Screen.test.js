import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { Test1Screen } from '../../../components/test-1/Test1Screen';

describe("Test on <Test1Screen/>", ()=>{

    test('SnapShot of <Test1Screen/>', ()=>{
        const wrapper = shallow(<Test1Screen />);
        expect(wrapper).toMatchSnapshot();
    })

})