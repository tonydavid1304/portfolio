import React, {Component, Fragment} from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getData } from './actions/index';

import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import Clients from "./components/Clients.js";
import Contact from "./components/Contact.js";

import styled from 'styled-components';
import ScrollspyNav from "react-scrollspy-nav";
import { Navbar, Nav } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

const Div = styled.div`
  min-width: 100%;
`
class App extends Component {
  componentDidMount(){
    const { getData } = this.props;
    getData();
  }

  render(){
    const { data, isLoading, err } = this.props;
    
    return (
      <div className="App">
        {err ? <p>{err.message}</p> : null}
        
        {
          !isLoading ? 
            <Fragment>
              <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" fixed="top">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto" style={{margin:"auto"}}>
                    <ScrollspyNav
                      scrollTargetIds={["section_1", "section_2", "section_3","section_4"]}
                      offset={0}
                      activeNavClass="is-active"
                      scrollDuration="1000"
                      headerBackground="false"
                    >  
                      {
                        data.map((section, index) => {
                          const {menu} = section;
                          return (
                            <ul key={index}>
                              <li><Nav.Link href="/">{menu[0]}</Nav.Link></li>
                              <li><Nav.Link href="#section_1">{menu[1]}</Nav.Link></li>
                              <li><Nav.Link href="#section_2">{menu[2]}</Nav.Link></li>
                              <li><Nav.Link href="#section_3">{menu[3]}</Nav.Link></li>
                              <li><Nav.Link href="#section_4">{menu[4]}</Nav.Link></li>
                            </ul> 
                          )
                        })
                      }                                                  
                    </ScrollspyNav>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>

              <Div key="1">
                <About data={data}/>
                <div id="section_1"><Skills data={data}/></div>
                <div id="section_2"><Projects data={data}/></div>
                <div id="section_3"><Clients data={data}/></div>             
                <div id="section_4"><Contact data={data}/></div>             
              </Div>
            </Fragment>
          :
            <p>loading..</p>
        }              
      </div>
    );
  }
  
}

const mapStateToProps = state => ({
  data: state.data,
  isLoading: state.isLoading,
  err: state.err
})

const mapDispatchToProps = dispatch => ({
 getData: () => dispatch(getData())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
