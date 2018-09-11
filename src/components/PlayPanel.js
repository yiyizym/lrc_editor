import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import model from '../model';
import { observer } from 'mobx-react';
import IconButton from '@material-ui/core/IconButton';
import PlayIcon from '@material-ui/icons/PlayArrow';
import ReplayIcon from '@material-ui/icons/Replay';
import Pause from '@material-ui/icons/Pause';
import PlayProgress from './PlayProgress';

const styles = theme => ({
  root: {
  },
  button: {

  }
})

@observer
class PlayPanel extends React.Component {
  togglePlaySong = () => {
    if (!model.player) return;
    model.playing = !model.player.isPlaying();
    model.player.togglePlay();
  }
  getPlayedPecentages = () => {
    if (!model.player) return;
    return model.player.getPlayedPecentages();
  }
  comeToEnding = () => {
    return this.getPlayedPecentages() - 100 < 0.001;
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
          {model.playing ? <Pause /> : this.comeToEnding() ? <ReplayIcon /> : <PlayIcon />}
        </IconButton>
        <PlayProgress showUpdateProgress={model.playing} currentProgress={this.getPlayedPecentages}></PlayProgress>
      </div>
    )
  };
}

export default withStyles(styles)(PlayPanel);