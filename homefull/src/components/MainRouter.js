import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../screens/Home';

export default class MainRouter extends Component {
    render() {
        return (
            <Router>
                <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
                    <div style={styles.sidebar}>
                        <div>
                            <div style={styles.sections}>
                                <img src={require('../logo.svg')} style={{ height: 100, width: 100, margin: 10, marginRight: 0, marginTop: 25 }} alt='logo'></img>
                                <h3 style={{ color: 'white', lineHeight: 3.7, wordBreak: "break-all", fontSize: 30 }}> </h3>
                            </div>

                            <div style={styles.sections}>
                                <Link to="/">
                                    <h5 style={styles.h5}>Home</h5>
                                </Link>
                            </div>

                        </div>

                        <div style={styles.sections}>
                            <Link to="/testing">
                                <h5 style={styles.h5}>Logout</h5>
                            </Link>
                        </div>
                    </div>

                    <div style={{ marginLeft: 300 }}>
                        <Route exact path="/" component={Home}></Route>
                    </div>
                </div>
            </Router>
        )
    }
}

const styles = {
    sidebar: {
        height: '100%',
        minWidth: 100,
        backgroundColor: 'rgb(50, 50, 50)',
        display: 'inline-block',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed'
    },

    sections: {
        display: 'flex',
        flexDirection: 'row',
        padding: '5px 20px'
    },

    h5: {
        marginLeft: 13,
        lineHeight: 1,
        color: 'white',
        fontSize: 18
    }
}
