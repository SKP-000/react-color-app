import styled from 'styled-components';
import sizes from './sizes';

export const Root = styled.div`
  height: calc(100vh - 56px);

  ${sizes.down('xs')} {
    display: flex;
    flex-direction: column;
    align-content: baseline;
  }
`;