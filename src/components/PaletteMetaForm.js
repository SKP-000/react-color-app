import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default class PaletteMetaForm extends Component {
  state = {
    open: false,
    newPaletteName: ''
  }

  componentDidMount() {

    ValidatorForm.addValidationRule('paletteNameUnique', value =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )  
    );

    ValidatorForm.addValidationRule('charLimit', value =>
      // if false: display error message
      // if true: let user submit
      value.length > 25 ? false : true
    );

  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleClickOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const { classes, handleSubmit } = this.props;
    const { open, newPaletteName } = this.state;
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
            </DialogContentText>

            <ValidatorForm
              onSubmit={() => handleSubmit(newPaletteName)}
              instantValidate={false}
              className={classes.paletteForm}
            >
              <TextValidator
                className={classes.paletteInput}
                name='newPaletteName'
                label='Palette Name'
                value={newPaletteName}
                onChange={this.handleChange}
                validators={[
                  'required',
                  'paletteNameUnique',
                  'charLimit'
                ]}
                errorMessages={[
                  'Enter a palette name',
                  'Palette already exists',
                  'Palette name over 25 characters'
                ]}
              />
              <Button
                variant='contained'
                color='primary'
                type='submit'
                style={{ backgroundColor: '#202020' }}
              >
                Save Palette
              </Button>
            </ValidatorForm>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
              </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
              </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}