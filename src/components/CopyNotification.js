import React from 'react';
import { Col } from 'react-bootstrap';
import styles from './ColorCard.module.css'

const CopyNotification = (props) => {
  console.log(props);
  return (
    <Col xs={12} sm={12} md={12} lg={12} className={styles.colorNotif}     
      style={{backgroundColor : `${props.props.color}`}}>
      
      <p className={styles.colorYear}>{props.props.year}</p>
      <h1 className={styles.colorName}> ¡Copiado! </h1>
      <p className={styles.colorPantone}>{props.props.pantone_value}</p>
    </Col>
  ); 
};
 
export default CopyNotification;
