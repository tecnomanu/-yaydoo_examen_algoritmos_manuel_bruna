import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { Test1Console } from '../../../components/test-1/Test1Console';

describe("Test on <Test1Console/>", ()=>{

    test('SnapShot of <Test1Console/>', ()=>{
        const wrapper = shallow(<Test1Console alice={[1,1,1]} bob={[2,1,1]} results={[1,0]} />);
        expect(wrapper).toMatchSnapshot();
    })

})