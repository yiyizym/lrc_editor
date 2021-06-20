import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import blue from '@material-ui/core/colors/blue'

const styles = theme => ({
  root: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  },
  button: {
    color: blue['500']
  }
})

class InputButton extends React.Component {
  render () {
    const { classes, handleUpload } = this.props
    return (
      <div className={classes.root}>
        <input
          accept='audio/*'
          className={classes.input}
          id='flat-button-file'
          onChange={(e) => handleUpload(e.target.files[0])}
          type='file'
        />
        <label htmlFor='flat-button-file'>
          <Button component='span' className={classes.button}>
            上传歌曲
          </Button>
        </label>
      </div>
    )
  };
}

export default withStyles(styles)(InputButton)
