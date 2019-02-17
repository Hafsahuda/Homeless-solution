import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles, withTheme, MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';

class Host extends Component {
    render() {
        const { classes, theme } = this.props;
        return (
            <div style={{textAlign:'center'}}>
                <h1 style={{color:'white'}}>
                    Thank you for agreeing to host!
                </h1>
            <div style={formStyle}>
                Please enter the following information:
                <div style={{display: 'block', padding: '10px'}}>
                    <TextField
                    id="outlined-dense"
                    label="Street Address"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-dense"
                    label="City"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-dense"
                    label="State"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-dense"
                    label="Zipcode"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-dense"
                    label="Start Date"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-dense"
                    label="End Date"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                </div>
                <Button variant="contained" color="primary" className={classes.button}>
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