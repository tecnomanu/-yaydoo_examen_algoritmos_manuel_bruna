import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { Test2Screen } from '../../../components/test-2/Test2Screen';

describe("Test on <Test2Screen/>", ()=>{

    test('SnapShot of <Test2Screen/>', ()=>{
        const wrapper = shallow(<Test2Screen />);
        expect(wrapper).toMatchSnapshot();
    })

})