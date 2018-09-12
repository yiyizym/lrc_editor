import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import model from '../model';
import InputButton from './InputButton';
import Button from '@material-ui/core/Button';
import Player from './Player';


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
    margin: theme.spacing.unit,
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
    model.player.on('end', () => model.playing = false);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <InputButton handleUpload={this.createPlayer} />
        <Button
          component="span"
          onClick={() => model.showEditor = true}
          className={classes.button}>
          上传歌词
        </Button>
      </div>
    )
  };
}

export default withStyles(styles)(ButtonsContainer);