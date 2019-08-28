import React from 'react';
import styled from 'styled-components';

const Root = styled.section`
  position: fixed;
  width: 100%;
  height: 100vh;
`;

export default function Page({ children }) {
  return <Root>{children}</Root>
}

// extracts children from props
// wraps the children around a section with class 'page'