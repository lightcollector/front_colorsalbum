import React, { useState, useEffect } from 'react'
import ColorCard from './ColorCard'
import CopyNotification from './CopyNotification'
import { Row } from 'react-bootstrap';



const CardsBoards = ({ colorList, hideNavbar }) => {
  const [colorCopied, toggleCopy] = useState(false);
  const [colorID, setColorID] = useState('');
  
  // Effect trigered on colorCopied true/false state change
  // On right working of clipboard-write, sets timer for display de success notification.
  useEffect(() => {
    if(colorCopied) {
      setTimeout(() => toggleCopy(false), 2000);
      setTimeout(() => hideNavbar(false), 2000);
    }
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
    hideNavbar(true);
  }

  /* rendering either the grid colors, or the success notification when flag is up  */
  
  if(colorCopied) {
    // for copy-success notification, we display the already developed ColorCard, changing the text parametres
    
    let rightCopiedProps = {
      id: colorList.find(col => col.id === colorID).id,
      name: colorList.find(col => col.id === colorID).name,
      color: colorList.find(col => col.id === colorID).color,
      pantone_value: colorList.find(col => col.id === colorID).pantone_value
      
    }
    //console.log(rightCopiedProps);
    return (
      <Row className="cardsBoard">
        <CopyNotification props={rightCopiedProps}/>
      </Row>
    )
  } else {
    
    return (
      <Row className="cardsBoard">
        {colorList.map((color, i) => (
            <ColorCard key={i} props={color} copyColor={copySuccess} />
        ))}
      </Row>
    )
  }
};

export default CardsBoards