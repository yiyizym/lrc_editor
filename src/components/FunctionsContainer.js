import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import model from '../model';
import InputButton from './InputButton';
import Button from 'Button';
import Player from './Player';


const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  }
})

@observer
class FunctionsContainer extends React.Component {
  createPlayer = async (file) => {
    if (model.player) {
      model.player.destroy();
    }
    model.player = await new Player(file);
    console.log(model.player.getSongName());

  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <InputButton handleUpload={this.createPlayer} />
        <Button 
          component="span" 
          handleClick={() => model.showEditor = true} 
          className={classes.button}>
          Lyrics
        </Button>
      </div>
    )
  };
}

export default withStyles(styles)(FunctionsContainer);