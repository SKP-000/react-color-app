import styled from 'styled-components';
import sizes from './sizes';

export const Root = styled.div`
  height: calc(100vh - 53px);

  ${sizes.down('xs')} {
    display: flex;
    flex-direction: column;
    align-content: baseline;
  }
`;

// a wrapper for wrapping around the root element to fix page transition
export const MetaWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
`;