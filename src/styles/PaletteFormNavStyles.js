import styled, { css } from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export const Root = styled(AppBar)`
  ${props => css`
    transition: ${props.theme.transitions.create(['margin', 'width'], {
      easing: props.theme.transitions.easing.sharp,
      duration: props.theme.transitions.duration.leavingScreen,
    })};
  `}
`;