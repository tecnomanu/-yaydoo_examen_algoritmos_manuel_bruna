import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { HomeScreen } from '../../../components/home/HomeScreen';

describe("Test on <HomeScreen/>", ()=>{
    test('SnapShot of <HomeScreen/>', ()=>{
        const wrappper = shallow(<HomeScreen />);

        expect(wrappper).toMatchSnapshot();
    })
})