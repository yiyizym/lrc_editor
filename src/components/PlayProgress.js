import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => {
  return {
    root: {
      flexGrow: 1,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey['300']
    },
    barColorPrimary: {
      backgroundColor: '#2196f3'
    }
  }

};
class PlayProgress extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      progress: 0
    }
  }
  componentDidUpdate = (prevProps) => {
    if (this.props.showUpdateProgress !== prevProps.showUpdateProgress){
      this.updateProgress()
    }
  }
  updateProgress = () => {
    if (this.props.showUpdateProgress) {
      let progress = this.props.currentProgress();
      this.setState({
        progress: progress
      });
      requestAnimationFrame(this.updateProgress)
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <LinearProgress
          classes={{
            colorPrimary: classes.colorPrimary,
            barColorPrimary: classes.barColorPrimary
          }}
          variant="determinate"
          value={this.state.progress}
        />
      </div>
    );
  }
}

PlayProgress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlayProgress);