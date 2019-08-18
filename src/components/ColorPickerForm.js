import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import chroma from 'chroma-js';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';

const styles = ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch',
    width: '90%'
  },
  colorPicker: {
    display: 'block',
    width:'100% !important',
    //marginTop: '-2.5em'
  },
  formContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  submitBtn: {
    margin: '1em 0',
    fontSize: '1.2rem'
  }
});

class ColorPickerForm extends Component {

  state = {
    currentColor: '#202020',
    newColorName: ''
  }

  componentDidMount() {
    const { colors } = this.props;
    const { currentColor } = this.state;
      // custom rule will have name 'colorNameUnique'
    ValidatorForm.addValidationRule('colorNameUnique', value =>
      colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );

    ValidatorForm.addValidationRule('colorUnique', value => 
      colors.every(
        ({ color }) => color !== currentColor
      )
    );

    ValidatorForm.addValidationRule('charLimit', value =>
      // if false: display error message
      // if true: let user submit
      value.length > 27 ? false : true
    );

  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  updateNewColor = (newColor) => {
    this.setState({ currentColor: newColor.hex });
  }

  handleSubmit = () => {
    const { addNewColor } = this.props;
    const { currentColor, newColorName } = this.state;
    
    addNewColor(currentColor, newColorName);
    this.setState({ newColorName: '' });
  }

  render() {
    const { paletteFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    
    return (
      <div className={classes.root}>  
        <ChromePicker 
          color={currentColor}
          onChangeComplete={this.updateNewColor}
          className={classes.colorPicker}
        />
        <ValidatorForm className={classes.formContent} onSubmit={this.handleSubmit} instantValidate={false} >
          <TextValidator
            value={newColorName}
            name='newColorName'
            placeholder='Color Name'
            variant='filled'
            margin='normal'
            onChange={this.handleChange}
            validators={[
              'required',
              'colorNameUnique',
              'colorUnique',
              'charLimit'
            ]}
            errorMessages={[
              'Name must not be empty',
              'Name already in use',
              'Color already in use',
              'Name is too long (above 27 characters)'
            ]}
          />
          <Button
            variant='contained'
            color='primary'
            type='submit'
            className={classes.submitBtn}
            disabled={paletteFull}
            style={{
              backgroundColor: paletteFull ? 'grey' : currentColor,
              // Checks if the contrast between the background color and the text color is low, if it isthen set text color to a color that would give a better contrast ratio and thus improvereadability
              color: chroma.contrast(currentColor, 'black') > 6 ? '#000' : '#fff'
            }}
          >
            Add Color
          </Button>
          </ValidatorForm>
        </div>
    )
  }
}

export default withStyles(styles)(ColorPickerForm);