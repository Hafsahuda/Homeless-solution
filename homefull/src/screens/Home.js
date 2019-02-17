import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


class Home extends Component {
    render() {
        const { classes, theme } = this.props;
        return (
            <div>
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
                    <Button component={Link} to="/find-charity" size="large" variant="outlined" color="secondary" className={classes.button}>
                        Find a Charity
                    </Button>
                </div>
             </div>
            )
        }
    }


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);