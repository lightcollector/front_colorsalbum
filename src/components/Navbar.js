import React, { useState, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';

// functional component to render the pagination buttons
const Navbar = ({decrPage, incrPage, currentPage, totalPages}) => {
    const [nextAvailable, enableNextBtn] = useState(false);
    const [prevAvailable, enablePrevBtn] = useState(false)
    return (
      <Row>
        <Button onClick={decrPage} className={currentPage}> Anterior </Button> 
        <p>Página: {currentPage}/{totalPages} </p>
        <Button onClick={incrPage}> Siguiente </Button>
      </Row> 
    );
  }

  export default Navbar;


//       <Button onClick={decrPage}> Anterior </Button>
//        <p>Página actual: {this.props.currentPage}/{this.props.totalPages} </p>