import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { Test1BoxCard } from '../../../components/test-1/Test1BoxCard';

describe("Test on <Test1BoxCard/>", ()=>{

    test('SnapShot of <Test1BoxCard/>', ()=>{
        const wrapper = shallow(<Test1BoxCard state={[10,20,30]} name={'Alice'}/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('CardHeader show correct name', ()=>{
        const name = "Bob"
        const wrapper = shallow(<Test1BoxCard state={[10,20,30]} name={name}/>);
        expect(wrapper.find(".card-header").text()).toBe(name);
    })

    test('SnapShot of <Test1BoxCard/>', ()=>{
        const wrapper = shallow(<Test1BoxCard state={[10,20,30]} name={'Alice'}/>);
        const lists = wrapper.find(".list-group-item");
        expect(lists.at(0).text()).toBe("Claridad del problema: 10");
        expect(lists.at(1).text()).toBe("Originalidad: 20");
        expect(lists.at(2).text()).toBe("Dificultad: 30");
    })
    
})