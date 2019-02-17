import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export class Charity extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        open: false,
        anchorEl: null,
        mobileMoreAnchorEl: null,
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div>
                <Typography variant="h1" style={{ color: 'white', textAlign: 'center' }} paragraph>
                    Thank you Charity
                </Typography>
            </div>
        );
    }
}

const drawerWidth = 240;
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
