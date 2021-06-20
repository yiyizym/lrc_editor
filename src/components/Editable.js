import React from 'react'
import ReactDOM from 'react-dom'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import blue from '@material-ui/core/colors/blue'
import CreateIcon from '@material-ui/icons/Create'
import DoneIcon from '@material-ui/icons/Done'
import Input from '@material-ui/core/Input'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1)
  },
  icon: {
    marginRight: theme.spacing(1),
    fontSize: 'inherit',
    cursor: 'pointer'
  },
  hide: {
    display: 'none'
  },
  cssUnderline: {
    '&:after': {
      borderBottomColor: blue[500],
    },
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
  toggleIcon (showIcon) {
    this.setState({ iconShow: showIcon })
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
        onMouseEnter={() => this.toggleIcon(true)}
        onMouseLeave={() => this.toggleIcon(false)}
      >
        { this.renderIcon(classes) }
        <Input
          className={inputShow ? '' : classes.hide}
          value={text}
          onChange={(e) => this.handleInput(e.target)}
          fullWidth
          classes={{
            underline: classes.cssUnderline,
          }}
        />
        <Typography className={inputShow ? classes.hide : ''} component='p' >
          {text}
        </Typography>

      </div>
    )
  };
}

export default withStyles(styles)(Editable)
