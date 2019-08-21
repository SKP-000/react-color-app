import styled from 'styled-components';
import sizes from './sizes';

export const Root = styled.footer`
  display: flex;
  justify-content: flex-end;
  /* 7vh for Footer and 8vh for Navbar totalling to 15vh covered. The colorboxes altogether occupy 85vh of space. If you wish to change these height values make sure to change the height value of the colorbox area accordingly. */
  height: 7vh;
  ${sizes.down('xs')} {
    height: 5vh;
  }
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 1.3rem;

    span {

      &:first-of-type {
        margin-right: .5rem;
      }

      &:last-of-type {
        font-size: 1.1rem;
        ${sizes.down('xs')} {
          font-size: .8rem;
        }
      }

    }

  }
`;