import React from 'react';
import { Col } from 'react-bootstrap';

const CopyNotification = (props) => {
  console.log(props);
  return (
    <Col xs={12} sm={12} md={12} lg={12} className="colorCard"     
      style={{backgroundColor : `${props.props.color}`}}>
      
      <p className="colorYear">{props.props.year}</p>
      <h1 className="sccsCopyText"> ¡Copiado! </h1>
      <p className="colorPantone">{props.props.pantone_value}</p>
    </Col>
  ); 
};
 
export default CopyNotification;
