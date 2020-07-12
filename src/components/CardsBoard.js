import React from 'react'
import ColorCard from './ColorCard'
import { Row } from 'react-bootstrap';
const CardsBoards = ({ colorList }) => {
  return (
    <Row>
      {colorList.map((color, i) => (
          <ColorCard className="cardsBoard" key={i} props={color} />
      ))}
    </Row>
  )
};

export default CardsBoards