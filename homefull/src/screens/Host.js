import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles, withTheme, MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';

class Host extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ownerId: 0,
            address: '',
            city: '',
            state: '',
            zipcode: '',
            startDate: '',
            endDate: '',
        }
    }

    render() {
        const { classes, theme } = this.props;

        const handleSubmit = () => {
            const url = 'http://localhost:8080/addRoom';
            const data = {
                ownerId: this.state.ownerId,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zipcode: this.state.zipcode,
                availableFrom: this.state.startDate,
                availableTo: this.state.endDate,
            };
            fetch(url, {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json"
                }})
            .then(res => res.json())
            .then(posts => console.log(posts));
        }

        const updateAddress = event => {
            this.setState({address: event.target.value});
        }

        const updateCity = event => {
            this.setState({city: event.target.value});
        }

        const updateState = event => {
            this.setState({state: event.target.value});
        }

        const updateZipcode = event => {
            this.setState({zipcode: event.target.value});
        }

        const updateStartDate = event => {
            this.setState({startDate: event.target.value});
        }

        const updateEndDate = event => {
            this.setState({endDate: event.target.value});
        }

        return (
            <div style={{textAlign:'center'}}>
                <h1 style={{color:'white'}}>
                    Thank you for agreeing to host!
                </h1>
            <div style={formStyle}>
                Please enter the following information:
                <div style={{display: 'block', padding: '10px'}}>
                    <TextField
                    value={this.state.address}
                    onChange={event => updateAddress(event)}
                    id="outlined-dense"
                    label="Street Address"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                    <TextField
                    value={this.state.city}
                    onChange={event => updateCity(event)}
                    id="outlined-dense"
                    label="City"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                    <TextField
                    value={this.state.state}
                    onChange={event => updateState(event)}
                    id="outlined-dense"
                    label="State"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                    <TextField
                    value={this.state.zipcode}
                    onChange={event => updateZipcode(event)}
                    id="outlined-dense"
                    label="Zipcode"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                    <TextField
                    value={this.state.startDate}
                    onChange={event => updateStartDate(event)}
                    id="outlined-dense"
                    label="Start Date"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                    <TextField
                    value={this.state.endDate}
                    onChange={event => updateEndDate(event)}
                    id="outlined-dense"
                    label="End Date"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                </div>
                <Button variant="contained" onClick={handleSubmit} color="primary" className={classes.button}>
                    submit
                </Button>
            </div>
            </div>
            )
        }
    }

    const formStyle = {
        backgroundColor: 'rgb(200,200,200)', 
        textAlign:'center',
        maxWidth: '500px',
        margin: 'auto',
        marginTop: '30px',
        padding: '20px 20px 20px 20px',
        display: 'block'
    };

    const styles = theme => ({
        button: {
            margin: theme.spacing.unit,
        },
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing.unit,
          marginRight: theme.spacing.unit,
        },
        dense: {
          marginTop: 16,
        },
        menu: {
          width: 200,
        },
      });

Host.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(Host);
