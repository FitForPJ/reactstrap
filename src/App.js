import React from 'react';
import Head from './Header';
import Menu from './Menu';
import HomeDetial from './home';
import './App.css';
import {Container, Row,Col} from 'reactstrap';

import { Route } from 'react-router-dom'

const Main = () => <HomeDetial />
const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>


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
        <Col xs="12" sm="12" md="3" lg="2" >
         <Menu/>
        </Col>
          <Col xs="12" sm="12" md="9" lg="10" >
            <Route exact path="/" component={Main} />
            <Route path="/add" component={About} />
            <Route path="/edit" component={Post} />
            <Route path="/export" component={Project} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;