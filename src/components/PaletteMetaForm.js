import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

export default class PaletteMetaForm extends Component {
  state = {
    newPaletteName: ""
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

  render() {
    const { classes, handleSubmit, handleShowForm } = this.props;
    const { newPaletteName } = this.state;
    return (
      <Dialog open onClose={handleShowForm} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
          <ValidatorForm
            onSubmit={() => handleSubmit(newPaletteName)}
            instantValidate={false}
            className={classes.paletteForm}
          >
            <DialogContent>
              <DialogContentText>
                Please enter a name for your <span role='img' aria-labelledby='sparkles'>✨</span>fabulous palette<span role='img' aria-labelledby='sparkles'>✨</span>
              </DialogContentText>
              <Picker />
            
              <TextValidator
                className={classes.paletteInput}
                name='newPaletteName'
                label='Palette Name'
                value={newPaletteName}
                onChange={this.handleChange}
                fullWidth
                margin='normal'
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

            </DialogContent>
            <DialogActions style={{ marginBottom: '1em' }}>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                style={{ backgroundColor: '#202020' }}
              >
                Save Palette
              </Button>
              <Button className={classes.subButton} onClick={handleShowForm} variant='outlined' color="inherit">
                Cancel
              </Button>
            </DialogActions>
            
          </ValidatorForm>
        </Dialog>
    );
  }
}