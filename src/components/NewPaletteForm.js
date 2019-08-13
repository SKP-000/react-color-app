import React, { Component } from 'react';
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
import { ChromePicker } from 'react-color';

// TODO: REFACTOR THIS COMPONENT TO USE STYLED-COMPONENTS INSTEAD OF MATERIAL-UI's IN-HOUSE STYLING SOLUTION

const drawerWidth = 340;

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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  subButtonContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  subButton: {
    color: '#202020',
    border: '1.5px solid #000',
    fontWeight: '700'
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
  },
}));

class NewPaletteForm extends Component {
  state = {
    open: false,
    currentColor: '#202020',
    colors: []
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  }

  handleDrawerClose = () => {
    this.setState({ open: false });
  }

  updateNewColor = (newColor) => {
    this.setState({ currentColor: newColor.hex });
  }

  addNewColor = () => {
    this.setState(st => (
      {colors: [...st.colors, this.state.currentColor]}
    ))
  }

  render() {
    const { classes } = this.props;
    const { open, currentColor } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Create Palette
            </Typography>
          </Toolbar>
        </AppBar>
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
          <Typography variant='h4'>
            Design Your Palette
            </Typography>
          
          <div className={classes.subButtonContainer}>
            <Button
              variant='outlined'
              color='inherit'
              className={classes.subButton}
            >
              Clear Palette
            </Button>
            <Button
              variant='outlined'
              color='inherit'
              className={classes.subButton}
            >
              Random Color
            </Button>
          </div>
          
          <ChromePicker 
            color={currentColor}
            onChangeComplete={this.updateNewColor}
          />
          <Button
            variant='contained'
            color='primary'
            onClick={this.addNewColor}
            style={{
              backgroundColor: currentColor,
              // Checks if the contrast between the background color and the text color is low, if it is then set text color to a color that would give a better contrast ratio and thus improve readability
              color: chroma.contrast(currentColor, "black") > 6 ? '#000' : '#fff'
            }}
          >
            Add Color
          </Button>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <ul>
            {this.state.colors.map(color => (
              <li style={{backgroundColor: color}}>{color}</li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);