import React from 'react'
import ReactDOM from 'react-dom'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import blue from '@material-ui/core/colors/blue'
import CreateIcon from '@material-ui/icons/Create'
import DoneIcon from '@material-ui/icons/Done'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.unit
  },
  icon: {
    marginRight: theme.spacing.unit,
    fontSize: 'inherit',
    cursor: 'pointer'
  },
  hide: {
    display: 'none'
  },
  text: {

  }
})

class Editable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: props.text,
      iconShow: false,
      inputShow: false
    }
  }
  showIcon () {
    this.setState({ iconShow: true })
  }
  hideIcon () {
    this.setState({ iconShow: false })
  }
  showInput () {
    this.setState({ inputShow: true })
  }
  submit () {
    this.setState({ inputShow: false })
    this.props.onSubmit(this.state.text)
  }
  renderIcon (classes) {
    const { iconShow, inputShow } = this.state
    return (iconShow
      ? (inputShow
        ? <DoneIcon className={classes.icon} title='edit' onClick={() => { this.submit() }} />
        : <CreateIcon className={classes.icon} title='save' onClick={() => { this.showInput() }} />)
      : null)
  }
  handleInput (obj) {
    this.setState({
      text: obj.value
    })
  }
  render () {
    const { classes } = this.props
    const { inputShow, text } = this.state
    return (
      <div
        className={classes.root}
        onMouseEnter={() => this.showIcon()}
        onMouseLeave={() => this.hideIcon()}
      >
        { this.renderIcon(classes) }
        <input
          className={inputShow ? '' : classes.hide}
          value={text}
          onChange={(e) => this.handleInput(e.target)}
          type='text'
        />
        <Typography className={inputShow ? classes.hide : ''} component='p' >
          {text}
        </Typography>

      </div>
    )
  };
}

export default withStyles(styles)(Editable)
