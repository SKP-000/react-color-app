import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';
import {
  Root
} from '../styles/DraggableColorListStyles';

const DraggableColorList = SortableContainer(({ colors, deleteColor }) => {
  return (
    <Root>
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          color={color.color}
          key={color.name}
          name={color.name}
          deleteColor={deleteColor}
        />
      ))}
    </Root>
  );
})

export default DraggableColorList;