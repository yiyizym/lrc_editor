import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import model from '../model';
import { observer } from 'mobx-react';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Hint = observer(() => {
  const clearHint = () => {
    model.hint = ''
    model.showHint = false
  }
  return (<Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={5000}
      open={model.showHint}
      onClose={clearHint}
      message={model.hint}
    >
      <Alert severity="info">{model.hint}</Alert>
    </Snackbar>)
})

export default Hint;