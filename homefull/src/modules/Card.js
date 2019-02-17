import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    card: {
        maxWidth: 300,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});



class HouseCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }



    handleClick() {
        //e.preventDefault();
        alert(this.props.roomId);
    }

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card} onClick={this.handleClick}>
                <CardHeader
                    //   avatar={
                    //     <Avatar aria-label="Recipe" className={classes.avatar}>
                    //       R
                    //     </Avatar>
                    //   }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={this.props.address + ', ' + this.props.city + ' ' + this.props.state + ' ' + this.props.zipcode}
                // subheader="Posted on September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image={require("../assets/room1.jpeg")}
                    title="room1"
                />
                <CardContent>
                    <Typography component="p">
                        {this.props.startDate} - {this.props.endDate}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        );
    }
}

HouseCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HouseCard);
