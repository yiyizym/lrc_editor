import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import model from '../model';
import { observer } from 'mobx-react';
import IconButton from '@material-ui/core/IconButton';
import PlayIcon from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';



const styles = theme => ({
    root: {
    },
    button: {

    }
})

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false
        }
    }
    togglePlaySong = () => {
        if (!model.player) return;
        const player = model.player;
        this.setState({ isPlaying: !player.isPlaying()})
        if(player.isPlaying()){
            player.pause();
        } else {
            player.play();
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <IconButton
                    className={classes.button}
                    aria-label="Play"
                    onClick={this.togglePlaySong}
                >
                    {this.state.isPlaying ? <Pause /> : <PlayIcon />}
                </IconButton>
            </div>
        )
    };
}

export default withStyles(styles)(MusicPlayer);