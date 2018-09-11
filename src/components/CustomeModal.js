import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import model from '../model';

const styles = (theme) => ({
  main: {},
  fotter: {}
})

class CustomModal extends React.Component {
  render(){
    const { classes } = this.props;
    return (
      <Modal
        open={model.showEditor}
        onClose={() => model.showEditor = false}
      >
        <Typography variant="title">Lyrics</Typography>
        <div className={classes.main}></div>
        <div className={classes.footer}>
          <Button
            component="span"
            handleClick={() => model.showEditor = false} 
          >cancel</Button>
        </div>
      </Modal>
    )
  }
}

export default withStyles(styles)(CustomModal);;