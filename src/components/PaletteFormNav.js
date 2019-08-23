import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import PaletteMetaForm from './PaletteMetaForm';
import sizes from '../styles/sizes';

const drawerWidth = 400;

const styles = (theme => ({
  root: {
    display: 'flex',
    height: '64px'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
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
  title: {
    [sizes.down('xs')]: {
      display: 'none'
    }
  },
  subButton: {
    color: '#202020',
    border: '1.5px solid #000',
    fontWeight: '700',
    margin: '10px',
  },
  submitBtn: {
    backgroundColor: '#202020',
    color: '#fff',
    '&:hover, &:active': {
      backgroundColor: '#303030'
    }
  },
  hide: {
    display: 'none',
  },
  paletteForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  navBtns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    [sizes.down('xs')]: {
      marginRight: '10%',
      whiteSpace: 'nowrap'
    }  
  }
}));

class PaletteFormNav extends Component {

  state = {
    formShowing: false
  }

  handleShowForm = () => {
    this.setState(st => (
      {formShowing: !st.formShowing}
    ));
  }

  render() {
    const {
      classes,
      open,
      handleDrawerOpen,
      savePalette,
      history,
      colors,
      palettes
    } = this.props;
    const { formShowing } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color='default'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <AddToPhotosIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.title}>
              Create Palette
            </Typography>          
          </Toolbar>

          <div className={classes.navBtns}>
            <Button
              variant='contained'
              className={classes.submitBtn}
              onClick={this.handleShowForm}
              color='inherit'
            >
              Submit Palette
            </Button>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Button
                className={classes.subButton}
                variant='outlined'
                color='inherit'
              >
                Go Back
              </Button>
            </Link>
          </div>
        </AppBar>

        {formShowing && (
          <PaletteMetaForm
            classes={classes}
            palettes={palettes}
            handleShowForm={this.handleShowForm}
            formShowing={formShowing}
            savePalette={savePalette}
            history={history}
            colors={colors}
          />
        )}
      </div>
    )
  }
}


export default withStyles(styles, { withTheme: true })(PaletteFormNav);