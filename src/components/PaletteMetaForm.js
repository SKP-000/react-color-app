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
    stage: 'name',
    newPaletteName: '',
    paletteName: ''
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

  handleSavePalette = (paletteName, emoji) => {
    const { savePalette, history, colors } = this.props;
    const newPalette = {
      paletteName: paletteName,
      id: paletteName.toLowerCase().replace(/ g/, '-'),
      emoji: `${ emoji.native ? emoji.native : emoji.colons }`,
      colors
    }

    savePalette(newPalette);
    history.push('/');
  }

  handleSave = (emoji) => {
    const { paletteName } = this.state;
    this.handleSavePalette(paletteName, emoji);
  }

  setNextStage = () => {
    this.setState(st => (
      {paletteName: st.newPaletteName}
    ), () => {
      this.setState({ stage: 'emoji' })
    });
  }

  render() {
    const { classes, handleShowForm } = this.props;
    const { newPaletteName, stage } = this.state;
    return (
      <div>
        <Dialog open={stage === 'emoji'} onClose={handleShowForm} >
          <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
          <Picker title='Pick a Palette Emoji' onSelect={this.handleSave} />
        </Dialog>

        <Dialog open={stage === 'name'} onClose={handleShowForm} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
          <ValidatorForm
            onSubmit={this.setNextStage}
            instantValidate={false}
            className={classes.paletteForm}
          >
            <DialogContent>
              <DialogContentText>
                Please enter a name for your <span role='img' aria-labelledby='sparkles'>✨</span>fabulous palette<span role='img' aria-labelledby='sparkles'>✨</span>
              </DialogContentText>
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
              <Button className={classes.subButton} onClick={handleShowForm} variant='outlined'color="inherit">
                Cancel
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
      
    );
  }
}