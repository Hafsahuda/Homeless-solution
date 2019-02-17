import React, { Component } from 'react';
import HouseCard from '../modules/Card';

export default class Test extends Component {
	render() {
		return (
            <div>
                <h1 style={{color:'white'}}>Your Postings</h1>
                <div style={{display:'inline'}}>
                    <HouseCard />
                    <HouseCard />
                </div>
            </div>
		)
	}
}