import React, { useState, Fragment } from 'react';
import Button from 'react-bootstrap/Button';

// functional component to render the pagination buttons
const Pagination = ({decrPage, incrPage, currentPage, totalPages}) => {
    const [nextAvailable, enableNextBtn] = useState(false);
    const [prevAvailable, enablePrevBtn] = useState(false)
    return (
      <Fragment>
        <Button onClick={decrPage} className={currentPage}> Anterior </Button> 
        <p>Página actual: {currentPage}/{totalPages} </p>
        <Button onClick={incrPage}> Siguiente </Button>
      </Fragment> 
    );
  }

  export default Pagination;


//       <Button onClick={decrPage}> Anterior </Button>
//        <p>Página actual: {this.props.currentPage}/{this.props.totalPages} </p>