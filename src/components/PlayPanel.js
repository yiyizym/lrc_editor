import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import model from '../model';
import { observer } from 'mobx-react';
import Button from '@material-ui/core/Button';
import PlayProgress from './PlayProgress';
import { formatTime } from '../util/helper';
import blue from '@material-ui/core/colors/blue';

const styles = theme => ({
  root: {
  },
  button: {
    margin: theme.spacing.unit,
    color: blue['500']
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
    return 100 - this.getPlayedPecentages() < 0.01;
  }
  makeTag = () => {
    if (!model.player) return;
    console.log('tag: ', model.player.getPlayedSeconds());
    let targetLyrics = model.rawLyrics[model.indexToBeTagged++];
    if(!targetLyrics){
      console.log('indexToBeTagged out of range!');
      return;
    }
    targetLyrics['time'] = model.player.getPlayedSeconds();
  }
  rewindAndUntag = () => {
    if (!model.player) return;
    model.player.rewind(2);
    let targetIndex = Math.max(model.indexToBeTagged - 1, 0);
    let targetLyrics = model.rawLyrics[targetIndex];
    if(targetLyrics['time'] > model.player.getPlayedSeconds()){
      targetLyrics['time'] = '';
      model.indexToBeTagged = targetIndex;
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button
          disabled={model.player === null}
          className={classes.button}
          aria-label="Play"
          onClick={this.togglePlaySong}
        >
          {model.playing ? '暂停' : this.comeToEnding() ? '重放' : '播放'}
        </Button>
        <Button
          disabled={model.player === null}
          className={classes.button}
          aria-label="MakeTag"
          onClick={this.makeTag}
        >
          打 Tag
        </Button>
        <Button
          disabled={model.player === null}
          className={classes.button}
          aria-label="rewindAndUntag"
          onClick={this.rewindAndUntag}
        >
          回退(2 秒)
        </Button>

        <PlayProgress showUpdateProgress={model.playing} currentProgress={this.getPlayedPecentages}></PlayProgress>
      </div>
    )
  };
}

export default withStyles(styles)(PlayPanel);