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
    cursor: 'pointer'
  }
})
@observer
class LyricsPanel extends React.Component {

  seekTo = (time) =>{
    if(!model.player) return ;
    model.player.seek(time);
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
                <TableCell>Lycis</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {model.rawLyrics.map((item, index) => {
                return (
                  <TableRow
                    key={index}
                    hover
                    selected={index == model.indexToBeTagged}
                    >
                    <TableCell
                      className={classes.timeCell}
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