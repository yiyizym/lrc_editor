import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    input: {
        display: 'none',
    },
    button: {

    }
})

class InputButton extends React.Component {
    render() {
        const { classes, handleUpload } = this.props;
        return (
            <div>
                <input
                    accept="audio/*"
                    className={classes.input}
                    id="flat-button-file"
                    onChange={(e) => handleUpload(e.target.files[0])}
                    type="file"
                />
                <label htmlFor="flat-button-file">
                    <Button component="span" className={classes.button}>
                        Upload
                    </Button>
                </label>
            </div>
        )
    };
}

export default withStyles(styles)(InputButton);