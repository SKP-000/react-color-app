import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PaletteMetaForm from './PaletteMetaForm';

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
  subButton: {
    color: '#202020',
    border: '1.5px solid #000',
    fontWeight: '700',
    margin: '10px',
  },
  hide: {
    display: 'none',
  },
  paletteForm: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  navBtns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}));

class PaletteFormNav extends Component {

  render() {
    const {
      classes,
      open,
      handleDrawerOpen,
      handleSubmit,
      palettes
    } = this.props;

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
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Create Palette
            </Typography>          
          </Toolbar>

          <div className={classes.navBtns}>
            <PaletteMetaForm
              classes={classes}
              handleSubmit={handleSubmit}
              palettes={palettes}
            />
            <Link to='/' style={{textDecoration: 'none'}}>
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
      </div>
    )
  }
}


export default withStyles(styles, { withTheme: true })(PaletteFormNav);