import React, { useState, useEffect } from 'react'
import ColorCard from './ColorCard'
import { Row } from 'react-bootstrap';



const CardsBoards = ({ colorList }) => {
  const [colorCopied, toggleCopy] = useState(false);
  const [colorID, setColorID] = useState('');
  
  // hook for 
  useEffect(() => {
    console.log('effect runs');
    const interval = setInterval(() => console.log("copiadoState: " + colorCopied), 1000);

    if(colorCopied) {
      setTimeout(() => toggleCopy(false), 3000);
    }

    return () => clearInterval(interval);
  }, [colorCopied]);


  /**
  * Function to change hook state.
  * - Triggered on clipboard-write succeess in child.
  * - Updates de ID of the color copied, and sets a flag to display de success notification.
  * @param  {int}
  */ 
  function copySuccess(colorID) {
    setColorID(colorID);
    toggleCopy(true);
    console.log("colorID: " + colorID)
  }

  return (
    <Row className="cardsBoard">
      {colorList.map((color, i) => (
          <ColorCard key={i} props={color} copyColor={copySuccess} />
      ))}
    </Row>
  )
};

export default CardsBoards