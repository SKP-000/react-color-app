import React, { Component } from 'react';
import PaletteFormNav from './PaletteFormNav';
import DraggableColorList from './DraggableColorList';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import chroma from 'chroma-js';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';

// TODO: REFACTOR THIS COMPONENT TO USE STYLED-COMPONENTS INSTEAD OF MATERIAL-UI's IN-HOUSE STYLING SOLUTION

const drawerWidth = 400;

const styles = (theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  title: {
    textTransform: 'uppercase',
    fontSize: '1.6rem',
    fontWeight: 300,
    fontFamily: '"Montserrat", serif',
    marginBottom: '1.5rem',
    borderBottom: '1px solid #000'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  subButtonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subButton: {
    color: '#202020',
    border: '1.5px solid #000',
    fontWeight: '700',
    margin: '10px',
  },
  saveButton: {
    border: '1.5px solid #fff',
    color: '#fff'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  drawerContent: {
    display: 'flex',
    marginTop: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }
  
}));

class NewPaletteForm extends Component {
  state = {
    open: false,
    currentColor: '#202020',
    newColorName: '',
    colors: this.props.palettes[0].colors,
  }

  componentDidMount() {
      // custom rule will have name 'colorNameUnique'
    ValidatorForm.addValidationRule('colorNameUnique', value =>
      this.state.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    
    ValidatorForm.addValidationRule('colorUnique', value => 
      this.state.colors.every(
        ({ color }) => color !== this.state.currentColor
      )
    );

    ValidatorForm.addValidationRule('charLimit', value =>
      // if false: display error message
      // if true: let user submit
      value.length > 27 ? false : true
    );

  }

  /**
   * @param oldIndex Extracted from the default args given to us. gives the old index position of the element
   * @param newIndex Same as OldIndex. gives the new index position of the element
   * 
   * - Constructs a newly ordered array of colors.
   * - If the color is moved into a position that is behind its old position, the first section of the newly ordered array contains all elements of the previous array up to the newIndex, the color being moved is placed right afterwards, then the rest of the array is sliced and put in.
   * - If the color is moved into a position that is after its old position, the first section of the newly ordered array contains all elements from start up to the oldIndex, second section contains all elements from the oldIndex (including whichever element is at the oldIndex) up to the newIndex (including the newIndex), then the moved color is placed right afterwards and the rest of the array is sliced and put in.
   * - Finally sets state to update the colors array (in state).
   */

   // TODO: MOVE HELPER FUNCTION (TO MOVE ELEMS IN ARRAY) TO A SEPARATE HELPER FUNCTIONS FILE

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(st => {
      const { colors } = st;
      let newOrder;
      let movingColor = colors[oldIndex];
      let isPosBackwards = oldIndex > newIndex;

      if (isPosBackwards) {
        newOrder = [...colors.slice(0, newIndex), movingColor, ...colors.slice(newIndex, oldIndex), ...colors.slice(oldIndex + 1)]
      } else {
        newOrder = [...colors.slice(0, oldIndex), ...colors.slice(oldIndex + 1, newIndex + 1), movingColor, ...colors.slice(newIndex + 1)]
      }

      return { colors: newOrder };

    });

  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  }

  handleDrawerClose = () => {
    this.setState({ open: false });
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit = (newPaletteName) => {
    const { savePalette, history } = this.props;
    const { colors } = this.state;
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      colors
    }
    savePalette(newPalette);
    history.push('/');
  }

  updateNewColor = (newColor) => {
    this.setState({ currentColor: newColor.hex });
  }

  addNewColor = () => {
    let newColor = { color: this.state.currentColor, name: this.state.newColorName };
    this.setState(st => (
      { colors: [...st.colors, newColor], newColorName: '' }
    ));
  }

  deleteColor = (colorName) => {
    this.setState({
      colors: this.state.colors.filter(color => color.name !== colorName)
    });
  }

  getRandomColor = () => {
    const { palettes } = this.props;

    // gets a random index for both the palette and it's respective colors array
    const randPaletteI = Math.floor(Math.random() * palettes.length);
    const randColorI = Math.floor(Math.random() * palettes[randPaletteI].colors.length);
    
    // gets the random color of the randomly chosen palette
    let randomColor = palettes[randPaletteI].colors[randColorI];

    this.setState(st => ({
      colors: [...st.colors, randomColor]
    }));
  }

  clearPalette = () => {
    this.setState({ colors: [] });
  }

  render() {
    const { classes, palettes } = this.props;
    const {
      open,
      currentColor,
      colors,
      newColorName
    } = this.state;
    // colors cannot be added to palette if number of colors exceeds 20
    // used for setting disabled attr in buttons Add Color and Random Color
    const paletteFull = colors.length > 19;

    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          classes={classes}
          palettes={palettes}
          handleDrawerOpen={this.handleDrawerOpen}
          handleSubmit={this.handleSubmit}
          />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>

          <Divider />

          <div className={classes.drawerContent}>
            <Typography variant='h4' className={classes.title}>
              Design Your Palette
            </Typography>

            <ChromePicker 
              color={currentColor}
              onChangeComplete={this.updateNewColor}
            />
            <ValidatorForm onSubmit={this.addNewColor} instantValidate={false} >
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
                  backgroundColor: currentColor,
                  // Checks if the contrast between the background color and the text color is low, if it is then set text color to a color that would give a better contrast ratio and thus improve readability
                  color: chroma.contrast(currentColor, "black") > 6 ? '#000' : '#fff'
                }}
              >
                Add Color
              </Button>
            </ValidatorForm>

            <div className={classes.subButtonContainer}>
              <Button
                className={classes.subButton}
                variant='outlined'
                color='inherit'
                onClick={this.clearPalette}
              >
                Clear Palette
              </Button>
              <Button
                className={classes.subButton}
                variant='outlined'
                color='inherit'
                onClick={this.getRandomColor}
                disabled={paletteFull}
              >
                Random Color
              </Button>
            </div>

          </div>
          
          
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            deleteColor={this.deleteColor}
            axis='xy'
            distance={2}
            onSortEnd={this.onSortEnd}
            />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);