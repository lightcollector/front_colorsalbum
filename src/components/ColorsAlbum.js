import React, { Component, Fragment } from 'react';
import Navbar from './Navbar'
import CardsBoard from './CardsBoard'
import { Row, Col } from 'react-bootstrap';
import './ColorsAlbum.css';
import axios from 'axios';


class ColorsAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: 0,
      colorsData: [],
      usersFetched: false
    };
  }


componentDidMount() {
  this.fetchData();
}

// when update "wich page we want to be displayed", we retrieve the info, what updates the state
componentDidUpdate(prevProbs, prevState) {
  const currentPg = this.state.currentPage;
  if (currentPg !== prevState.currentPage) {
    this.fetchData(currentPg);
  }
}

// getting colors data, first page by default
fetchData = (pg = 1) => {
  axios.get(`${process.env.REACT_APP_COLORS_ALBUM_BASE_URL}?page=${pg}`)
    .then(res => {
      const colorData = res.data
      this.setState({ 
        currentPage: colorData.page,
        totalPages: colorData.total_pages,
        colorsData: colorData.data
      })
      this.setState({usersFetched: true})

    })
    
}

// functions for get colors from next/previous page
incrPag = () => {
  if (this.state.currentPage < this.state.totalPages) {
    let currentPg = this.state.currentPage;
    this.setState({ currentPage: currentPg + 1 })
  }
}
decrPag = () => {
  if (this.state.currentPage > 1) {
    let currentPg = this.state.currentPage;
    this.setState({ currentPage: currentPg - 1 })
  }
}

  render() {
    if (this.state.usersFetched)
    {
      return (
        <Fragment>
          <Row>
            <Col className="headerBar"> Colores </Col>  
          </Row> 
          <CardsBoard colorList={this.state.colorsData}/ >
          <Navbar incrPage={this.incrPag} decrPage={this.decrPag} currentPage={this.state.currentPage} totalPages={this.state.totalPages}></Navbar>
        </Fragment>
      );
    } else {
      return (<p>Cargando colores... </p>)
    }
  }

}

export default ColorsAlbum;
