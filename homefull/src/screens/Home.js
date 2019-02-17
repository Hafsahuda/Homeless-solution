import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export class Home extends Component {
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



class Home extends Component {
    render() {
        const { classes, theme } = this.props;
        return (
            <div style={{marginTop: '200px'}}>
                <Typography variant="h1" style={{ color: 'white', textAlign: 'center' }} paragraph>
                    Welcome to Homeful
                </Typography>
                <div style={{ textAlign: 'center' }}>
                    <Button component={Link} to="/charity" size="large" variant="outlined" color="secondary" className={classes.button}>
                        Charity
                    </Button>
                    <Button component={Link} to="/host" size="large" variant="outlined" color="secondary" className={classes.button}>
                        Host
                    </Button>
<<<<<<< HEAD
                </div>
            </div>
        );
=======
                    <Button component={Link} to="/find-charity" size="large" variant="outlined" color="secondary" className={classes.button}>
                        Find a Charity
                    </Button>
                </div>
             </div>
            )
        }
>>>>>>> 8182a9cdfb399f112a7dc5f5265247eb423371ff
    }

<<<<<<< HEAD
const drawerWidth = 240;
=======

>>>>>>> 8182a9cdfb399f112a7dc5f5265247eb423371ff
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

<<<<<<< HEAD
export default withStyles(styles)(Home);
=======
export default withStyles(styles)(Home);
>>>>>>> 8182a9cdfb399f112a7dc5f5265247eb423371ff
