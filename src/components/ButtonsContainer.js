import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import model from '../model';
import InputButton from './InputButton';
import Button from '@material-ui/core/Button';
import Player from './Player';
import { formatTime } from "../util/helper";
import blue from '@material-ui/core/colors/blue';


const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  btn: {
    width: '25%',
    height: '50px',
    position: 'relative'
  },
  fileInput: {
    position: 'absolute',
    opacity: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    margin: theme.spacing(1),
    color: blue['500'],
  },
  link: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)',
  }
})

@observer
class ButtonsContainer extends React.Component {
  createPlayer = async (file) => {
    if (model.player) {
      model.player.destroy();
      model.player = null;
    }
    model.player = await new Player(file);
    model.indexToBeTagged = 0;
    this.addEventListener();
  }
  addEventListener = () => {
    if(!model.player) return;
    model.player.on('load', () => model.songLoaded = true);
    model.player.on('end', () => model.playing = false);
  }
  exportLrc = (e) => {
    if(!model.player) return;
    let link = e.target;
    if(e.target.tagName == 'SPAN'){
      link = e.target.parentNode;
    }
    link.setAttribute('download', `${model.player.getSongName()}.lrc`);
    link.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(model.rawLyrics.map(item => `${formatTime(item.time)} ${item.lyrics}`).join('\n'))}`);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button
          component="a"
          onClick={this.exportLrc}
          className={classes.button}>
          导出歌词
        </Button>
        <Button
          component="span"
          onClick={() => model.showEditor = true}
          className={classes.button}>
          粘贴歌词
        </Button>
        <InputButton handleUpload={this.createPlayer} />
      </div>
    )
  };
}

export default withStyles(styles)(ButtonsContainer);