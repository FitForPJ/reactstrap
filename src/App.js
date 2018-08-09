import React from 'react';
import Head from './Header';
import Menu from './Menu';
import './App.css';
import {Container, Row,Col} from 'reactstrap';




class Home extends React.Component {
  
  
  render() {
    return (      
      <Container fluid className="m-p-0">
        <Row>
          <Col>
            <Head/>
          </Col>
        </Row>
        <Row>
        <Col xs="6" sm="2">
         <Menu/>
        </Col>
          <Col xs="6" sm="10">.col-6 .col-sm-4</Col>
        </Row>
      </Container>
    );
  }
}

export default Home;