import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import HouseCard from '../modules/Card';
import Grid from '@material-ui/core/Grid';

class Charity extends Component {



    constructor(props) {
        super(props);
        this.state = {
            jsn: {
                title: 'houselist',
                roomList: ['address1', 'address2', 'address3']
            }
        };
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then((data) =>
                this.setState({
                    jsn: {
                        title: 'houselist',
                        roomList: ['address1', 'address2', 'address3']
                    }
                }))
            .then(console.log('swathy ==== ' + this.state.jsn))
            .catch(error => this.setState({ error, isLoading: false }));
    }


    render() {
        const { classes, theme } = this.props;
        //console.log(this)
        return (

            <div>
                <Typography variant="h1" style={{ color: 'white', textAlign: 'center' }} paragraph>
                    Available Homes
                </Typography>
                <div style={{ padding: 20 }}>
                    <Grid container spacing={40}>
                        {this.state.jsn.roomList.map((address, index) => (

                            <HouseCard startDate='Feb 16' endDate='Feb 17' address={address}
                                city='Dallas' state='TX' zipcode='77005' roomId={index} />


                        ))}

                    </Grid>
                </div>

            </div >
        )
    }
}


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

Charity.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(Charity);