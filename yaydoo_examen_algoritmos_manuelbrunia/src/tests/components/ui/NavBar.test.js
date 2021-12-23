import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { Navbar } from '../../../components/ui/NavBar';

describe("Test on <Navbar/>", ()=>{
    test('SnapShot of <Navbar/>', ()=>{
        const wrappper = shallow(<Navbar />);

        expect(wrappper).toMatchSnapshot();
    })
})