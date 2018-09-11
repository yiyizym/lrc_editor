import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import MusicPlayer from './MusicPlayer';
import FunctionsContainer from './FunctionsContainer';

const styles = theme => ({
    root: {
      marginTop: theme.spacing.unit * 2
    }
})

class ControllPanel extends React.Component {
    render(){
        const { classes } = this.props;
        return(
            <div>
                <Paper className={classes.root} elevation={1}>
                    <MusicPlayer></MusicPlayer>
                    <FunctionsContainer></FunctionsContainer>
                </Paper>
            </div>
        )
    };
}

ControllPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControllPanel);