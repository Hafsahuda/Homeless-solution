import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Mapimp from './Mapimp.js';
import { Row, Container, Col} from 'react-bootstrap';

class FindCharity extends Component {
    render() {
        const { classes, theme } = this.props;
        return (
            <div>
                <Typography variant="h1" style={{ color: 'white', textAlign: 'center' }} paragraph>
                    Welcome 
                </Typography>
                <h3 style={{ color: 'white', textAlign: 'center' }}>Nearby shelters</h3>
                <Container>
                    <Row style={{textAlign:"center"}}>
                        <Mapimp/>
                    </Row>
                </Container>
            </div>
        )
    }
}


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

FindCharity.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(FindCharity);