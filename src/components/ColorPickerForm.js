import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import chroma from 'chroma-js';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';

export default class ColorPickerForm extends Component {

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
    const { paletteFull } = this.props;
    const { currentColor, newColorName } = this.state;
    
    return (
      <div>  
        <ChromePicker 
          color={currentColor}
          onChangeComplete={this.updateNewColor}
        />
        <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false} >
          <TextValidator
            value={newColorName}
            name='newColorName'
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
            disabled={paletteFull}
            style={{
              backgroundColor: paletteFull ? 'grey' : currentColor,
              // Checks if the contrast between the background color and the text color is low, if it is then set text color to a color that would give a better contrast ratio and thus improve readability
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
