import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import blue from '@material-ui/core/colors/blue';

import model from '../model';
import { observer } from 'mobx-react';
import { formatTime, parseTime } from '../util/helper';

const styles = theme => ({
  wrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
    width: theme.spacing(100),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
  },
  main: {
    width: '100%',
    height: theme.spacing(20),
  },
  rawLyrics: {

  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(4),
  },
  btn: {
    margin: theme.spacing(1),
    color: blue['500']
  }
})
@observer
class LyricsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
  }
  printLyrics = () => {
    return model.rawLyrics.map(item => `${formatTime(item.time)} ${item.lyrics}`).join('\n');
  }
  setValue = (event) => {
    let lyrics = event.target.value.split('\n').map(this.parseLyrics);
    this.setState({
      value: lyrics
    });
  }
  parseLyrics = (line) => {
    let matches = line.match(/^(?:\[(.+)\])?(.*)/) || ['',''];
    return {
      time: parseTime(matches[1]),
      lyrics: matches[2].trim()
    }
  }
  submitLyrics = () => {
    if(this.state.value === null) { 
      model.hint = '请先粘贴歌词到弹窗'
      model.showHint = true
      return 
    }
    model.rawLyrics = this.state.value
    this.hideModal();
  }
  hideModal = () => {
    model.showEditor = false
  }
  render(){
    const { classes } = this.props;
    return (
      <Modal
        open={model.showEditor}
        onClose={this.hideModal}
      >
        <div className={classes.wrapper}>
          <Typography variant="subtitle1">Raw Lyrics</Typography>
          <div className={classes.main}>
            <TextField
              className={classes.rawLyrics}
              fullWidth={true}
              multiline
              defaultValue={'请把歌词粘贴到这里\n一句歌词占一行\n这是第三句歌词'}
              onChange={this.setValue}
              rowsMax={7}
              margin="normal"
            >
            </TextField>
          </div>
          <div className={classes.footer}>
            <Button
              component="span"
              className={classes.btn}
              onClick={this.hideModal}
            >取消</Button>
            <Button
              component="span"
              className={classes.btn}
              onClick={this.submitLyrics}
            >提交</Button>
          </div>
        </div>
      </Modal>
    )
  }
}

export default withStyles(styles)(LyricsModal);;