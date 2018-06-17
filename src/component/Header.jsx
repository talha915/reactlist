import React, { Component } from 'react';
import '../css/_Header.scss';
import { data } from '../Data/data';
export default class Header extends Component {
    render() {
        const list = data;
        const myList = data.map(value => {
            return (
                <li key={value.id}>
                    Id: {value.id}
                    <br/>
                    &nbsp;Name: {value.name}
                </li>
            )
        })
        return (
            <div id="header">
                <div className="text">
                    HELLO FROM HEADER
                </div>
                <p>
                    {myList}
                </p>
            </div>
        );
    }
}