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
            jsn:[]
        };
    }




    componentDidMount() {

       // let jsn = [];
        fetch('http://ec2-3-82-226-163.compute-1.amazonaws.com:8080/room/search?fromDate=17-02-2019&toDate=18-02-2019&zipcode=75252',
            {
                crossDomain: true
            })
            .then(response => response.json())
            .then((data) =>
                this.setState({
                    jsn: data
                }));
    }

    render() {
        //const { classes, theme } = this.props;
        console.log(this)
        return (

            <div>
                <Typography variant="h1" style={{ color: 'white', textAlign: 'center' }} paragraph>
                   {this.state.jsn.map((obj)=>(
			     <Grid >
                     {obj.availability.map((avaObj)=>{
                          var fd = avaObj.availableFrom;
                            return <HouseCard startDate={fd} endDate={avaObj.availableTo}
                                address={obj.room.address}
                                city={obj.room.city} state={obj.room.state} zipcode={obj.room.zip}
                                roomId={obj.room.roomId} />
                                })}
                        </Grid>
                   ))}
                </Typography>
                



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