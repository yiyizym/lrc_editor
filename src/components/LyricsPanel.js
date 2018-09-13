import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import blue from '@material-ui/core/colors/blue';

import model from '../model';
import { formatTime } from '../util/helper';
import { observer } from 'mobx-react';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 5,
    maxHeight: '600px',
    overflowY: 'auto',
  },
  table: {
    width: '100%',
  },
  timeCell: {
    cursor: 'pointer',
  },
  currentPlaying: {
    color: blue['500']
  }
})
@observer
class LyricsPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentPlayingIndex: 0
    }
  }
  componentDidMount(){
    if(!this._frameId){
      this._frameId = requestAnimationFrame(this.updateCurrentPlayingIndex);
    }
  }
  componentWillUnmount() {
    cancelAnimationFrame(this._frameId);
  }
  seekTo = (time) =>{
    if(!model.player) return ;
    model.player.seek(time);
  }
  updateCurrentPlayingIndex = () => {
    if (model.player && model.rawLyrics){
      for (let index = 0; index < model.rawLyrics.length; index++) {
        if (model.rawLyrics[index]['time'] > model.player.getPlayedSeconds()){
          this.setState({
            currentPlayingIndex: index - 1
          });
          break;
        }
      }
    }
    this._frameId = requestAnimationFrame(this.updateCurrentPlayingIndex);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Time</TableCell>
                <TableCell>Lyrcis</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {model.rawLyrics.map((item, index) => {
                return (
                  <TableRow
                    key={index}
                    hover
                    selected={index == model.indexToBeTagged}
                    className={classes.timeCell}
                    >
                    <TableCell
                      className={this.state.currentPlayingIndex == index ? classes.currentPlaying : null}
                      onClick={() => this.seekTo(item.time)}>
                      {formatTime(item.time)}
                    </TableCell>
                    <TableCell>{item.lyrics}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  };
}

LyricsPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LyricsPanel);