import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import PlayPanel from './PlayPanel'
import ButtonsContainer from './ButtonsContainer'

const styles = theme => ({
  root: {
    marginTop: theme.spacing(2)
  }
})

class ControllPanel extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <PlayPanel />
          <ButtonsContainer />
        </Paper>
      </div>
    )
  };
}

ControllPanel.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ControllPanel)
