import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';
import {
  Root,
  MetaWrapper
} from '../styles/DraggableColorListStyles';

const DraggableColorList = SortableContainer(({ colors, deleteColor }) => {
  return (
    <MetaWrapper>
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
    </MetaWrapper>
  );
})

export default DraggableColorList;