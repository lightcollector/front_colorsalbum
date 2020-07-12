import React from 'react';
import { Col } from 'react-bootstrap';

const ColorCard = (props) => {
/**
 * Function to write a string into the clipboard
 * - Takes the string value to write, and also the color ID and a function (from parent)
 * - to call when clipboard-write is succeeded
 * @param  {string, int, function}
 */ 
  function updateClipboard(newClip, colorId, copySuccessFn) {
    console.log("Le has dado lick a: " + newClip);
    // checking Permissions API's "clipboard-write" permission
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
      if (result.state === "granted" || result.state === "prompt") {
        // if browser allows clipboard-write
        navigator.clipboard.writeText(newClip).then(function() {
          // clipboard successfully set
          // call parent function for display "copied!" state
          copySuccessFn(colorId);
        }, function() {
          // clipboard write failed
          alert("El color no se ha podido copiar correctamente")
        });
      } else {
        alert("Tu navegador no sopoorta copiado automático al clicar los colores")
      }
    });
  }

  return (
    <Col xs={6} sm={6} md={4} lg={4} className="colorCard"  
      onClick={() => updateClipboard(props.props.color, props.props.id, props.copyColor)}      
      style={{backgroundColor : `${props.props.color}`}}>
      
      <p className="colorYear">{props.props.year}</p>
      <h4 className="colorHex">{props.props.name}</h4>
      <h1 className="colorHex">{props.props.color}</h1>
      <p className="colorPantone">{props.props.pantone_value}</p>
    </Col>
  ); 
};
 
export default ColorCard;
