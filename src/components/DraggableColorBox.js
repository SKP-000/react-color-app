import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import {
  Root,
  BoxContent,
  TextContent,
  DeleteButton
} from '../styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement(props => {
  const { name, color, deleteColor } = props;

  const handleClick = () => {
    deleteColor(name);
  }

  return (
    <Root
      background={color}
    >
      <BoxContent background={color} >
        <TextContent>
          <span>{name}</span>
        </TextContent>

        <DeleteButton onClick={handleClick} >
          <DeleteIcon className='deleteIcon' />
        </DeleteButton>
      </BoxContent>

    </Root>
  )
})

export default DraggableColorBox;