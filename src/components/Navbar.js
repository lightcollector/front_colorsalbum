import React, { useState, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import styles from './Navbar.module.css';

// functional component to render the pagination buttons
const Navbar = ({decrPage, incrPage, currentPage, totalPages}) => {
    return (
      <Row>
        <Col className={styles.prevBtn}> <Button variant="outline-dark" onClick={decrPage} className={currentPage}> &lt; Anterior </Button> </Col> 
        <Col className={styles.pagInfo}> <p>Página: {currentPage}/{totalPages} </p> </Col>
        <Col className={styles.nextBtn}> <Button variant="outline-dark" onClick={incrPage}> Siguiente &gt; </Button> </Col>
      </Row> 
    );
  }

  export default Navbar;


//       <Button onClick={decrPage}> Anterior </Button>
//        <p>Página actual: {this.props.currentPage}/{this.props.totalPages} </p>