import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import model from '../model';
import { Observer } from 'mobx-react';

const styles = theme => {
  return {
    root: {
      flexGrow: 1,
    },
    colorPrimaryNotReady: {
      backgroundColor: "#fff"
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey['300']
    },
    barColorPrimary: {
      backgroundColor: '#2196f3'
    }
  }

};

const PlayProgress = (props) => {
  const [progress, setProgress] = useState(0);

  function updateProgress(){
    if (props.showUpdateProgress) {
      setProgress(props.currentProgress())
      requestAnimationFrame(updateProgress)
    }
  }

  useEffect(() => {
    updateProgress()
  }, [props.showUpdateProgress])

  const { classes } = props;
  return (
    <div className={classes.root}>
      <Observer>
        {() => (<LinearProgress
          classes={{
            colorPrimary: model.songLoaded ? classes.colorPrimary : classes.colorPrimaryNotReady,
            barColorPrimary: classes.barColorPrimary
          }}
          variant="determinate"
          value={progress}
        />)}
      </Observer>
    </div>
  )
}

PlayProgress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlayProgress);