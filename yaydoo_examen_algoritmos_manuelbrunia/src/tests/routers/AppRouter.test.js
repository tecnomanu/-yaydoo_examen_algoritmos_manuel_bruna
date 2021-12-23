import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { AppRouter } from '../../routers/AppRouter';

describe("Test on <AppRouter/>", ()=>{
    test('SnapShot of <AppRouter/>', ()=>{
        const wrappper = shallow(<AppRouter />);

        expect(wrappper).toMatchSnapshot();
    })
})