import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import {
  GlobalStyle,
  Root,
  Container,
  Nav,
  Palettes
} from '../styles/PaletteListStyles';
import { CSSTransition } from 'react-transition-group';



class PaletteList extends Component {

  state = {
    openDeleteDialog: false,
    deletingId: ''
  }

  toggleDialog = (id) => {
    this.setState(st => (
      { openDeleteDialog: !st.openDeleteDialog, deletingId: id }
    ));
  }

  goToPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  }

  restorePalettes = () => {
    window.localStorage.clear();
    window.location.reload();
  }

  handleDelete = () => {
    const { removePalette } = this.props;
    const { deletingId } = this.state;
    this.setState({openDeleteDialog: false}, () => removePalette(deletingId));
  }

  render() {
    const { palettes } = this.props;
    const { openDeleteDialog } = this.state;
    return (
      <Root>
        <GlobalStyle />
        <Container>
          
          <Nav>
            <h1>React Colors App</h1>
            <div className="links">
              <Link
                exact='true'
                to='/palette/new'
              >
                Create Palette
              </Link>
              <Link
                exact='true'
                to='/'
                onClick={this.restorePalettes}
              >
                Restore Palettes
              </Link>
            </div>
          </Nav>

          <Palettes>
              {palettes.map(palette =>
                <CSSTransition
                  key={palette.id}
                  classNames='fade'
                  timeout={490}
                >
                  <MiniPalette
                    {...palette}
                    toggleDialog={this.toggleDialog}
                    key={palette.paletteName}
                    goToPalette={this.goToPalette}
                    />
                </CSSTransition>  
              )} 
          </Palettes>

        </Container>

        <Dialog
          open={openDeleteDialog}
          aria-labelledby='delete-dialog-title'
          onClose={this.toggleDialog}
        >
          <DialogTitle id='delete-dialog-title' >Delete This Palette?</DialogTitle>
          <List>
            <ListItem
              button
              onClick={this.handleDelete}
            >
              <ListItemAvatar>
                <Avatar
                  style={{backgroundColor: blue[100], color: blue[600]}}
                >
                  <CheckIcon />  
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>

            <ListItem button onClick={this.toggleDialog}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: red[100], color: red[600]}}
                >
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancel</ListItemText>
            </ListItem>
          </List>
        </Dialog>

      </Root>
    )
  }
}

export default PaletteList;