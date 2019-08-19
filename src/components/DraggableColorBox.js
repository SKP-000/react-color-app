import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import {
  Root,
  ColorBox,
  BoxContent,
  TextContent
} from '../styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement(props => {
  const { name, color, deleteColor } = props;

  const handleClick = () => {
    deleteColor(name);
  }

  return (
    <Root>
      
      <ColorBox
        background={color}
      >
        <BoxContent background={color} >
          <TextContent>
            <span>{name}</span>
          </TextContent>
          <DeleteIcon onClick={handleClick} className='delete-icon' />
        </BoxContent>

      </ColorBox>

    </Root>
  )
})

export default DraggableColorBox;