import React from 'react';
import {
  Root
} from '../styles/DraggableColorBoxStyles';

export default function DraggableColorBox(props) {
  return (
    <Root
      background={props.color}
    >
      {props.name}
    </Root>
  )
}
