import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD
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
=======
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


class Charity extends Component {
    render() {
        const { classes, theme } = this.props;
        return (
            <div>
                <Typography variant="h1" style={{ color: 'white', textAlign: 'center' }} paragraph>
                    Thank you charity!
                </Typography>
             </div>
            )
        }
    }


>>>>>>> 8182a9cdfb399f112a7dc5f5265247eb423371ff
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

Charity.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

<<<<<<< HEAD
export default withStyles(styles)(Charity);
=======
export default withStyles(styles)(Charity);
>>>>>>> 8182a9cdfb399f112a7dc5f5265247eb423371ff
