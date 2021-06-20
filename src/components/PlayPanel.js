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
    margin: theme.spacing(1),
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
    let targetLyrics = model.rawLyrics[model.indexToBeTagged++];
    if(!targetLyrics){
      console.log('indexToBeTagged out of range!');
      return;
    }
    targetLyrics['time'] = model.player.getPlayedSeconds();
  }
  unTag = () => {
    if (!model.indexToBeTagged) return;
    let targetIndex = model.indexToBeTagged - 1;
    while (targetIndex > -1 && model.rawLyrics[targetIndex]['time'] > model.player.getPlayedSeconds()){
      model.rawLyrics[targetIndex]['time'] = '';
      model.indexToBeTagged = targetIndex;
      targetIndex = model.indexToBeTagged - 1;
    }
  }
  rewindAndUntag = () => {
    if (!model.player) return;
    model.player.rewind(2);
    this.unTag();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button
          disabled={model.songLoaded === false}
          className={classes.button}
          aria-label="Play"
          onClick={this.togglePlaySong}
        >
          {model.playing ? '暂停' : this.comeToEnding() ? '重放' : '播放'}
        </Button>
        <Button
          disabled={model.songLoaded === false}
          className={classes.button}
          aria-label="MakeTag"
          onClick={this.makeTag}
        >
          打 Tag
        </Button>
        <Button
          disabled={model.songLoaded === false}
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