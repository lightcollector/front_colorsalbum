import React from 'react';
import { Col } from 'react-bootstrap';

const ColorCard = (props) => {
  
  var checkData = () =>{
    console.log("la info");
    console.log (props);
  }
  
  return (
    <Col xs={6} sm={6} md={4} lg={4}
      onClick={checkData()} className="colorCard"  
      style={{backgroundColor : `${props.props.color}`}}>
      
      <p className="colorYear">{props.props.year}</p>
      <h4 className="colorHex">{props.props.name}</h4>
      <h1 className="colorHex">{props.props.color}</h1>
      <p className="colorPantone">{props.props.pantone_value}</p>
    </Col>
  ); 
};
 
export default ColorCard;
