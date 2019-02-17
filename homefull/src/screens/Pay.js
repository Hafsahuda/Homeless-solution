import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


class Charity extends Component {
    render() {
        const { classes, theme } = this.props;
        return (
            <div>
                <Typography variant="h1" style={{ color: 'white', textAlign: 'center' }} paragraph>
                    Thanks for your money ;)
                </Typography>
            </div>
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