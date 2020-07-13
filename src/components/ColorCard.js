import React from 'react';
import { Col } from 'react-bootstrap';
import styles from './ColorCard.module.css';

const ColorCard = (props) => {
/**
 * Function to write a string into the clipboard
 * - Takes the string value to write, and also the color ID and a function (from parent)
 * - to call when clipboard-write is succeeded
 * @param  {string, int, function}
 */ 
  function updateClipboard(newClip, colorId, copySuccessFn) {
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
    <Col xs={6} sm={6} md={4} lg={4} className={styles.cardWraper}>
      <div className={styles.colorCard}  
          onClick={() => updateClipboard(props.props.color, props.props.id, props.copyColor)}      
          style={{backgroundColor : `${props.props.color}`}}>

        <p className={styles.colorYear}> {props.props.year} </p>
        <h4 className={styles.colorName}> {props.props.name} </h4>
        <h1 className={styles.colorHex}> {props.props.color} </h1>
        <p className={styles.colorPantone}> {props.props.pantone_value} </p>
      </div>
    </Col>
  ); 
};
 
export default ColorCard;
