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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';

const Div = styled.div`
  min-width: 100%;
`
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showNavItems: false
    }
  }

  componentDidMount(){
    const { getData } = this.props;
    getData();
  }

  onMenuClick(){
    
  }

  render(){
    const { data, isLoading, err } = this.props;
    
    return (
      <div className="App">
        {err ? <p>{err.message}</p> : null}

        {
          !isLoading ? 
            <Fragment>
             <ScrollspyNav
                scrollTargetIds={["section_1", "section_2", "section_3","section_4"]}
                offset={50}
                activeNavClass="is-active"
                scrollDuration="1000"
                headerBackground="true"
              >
                <div className="bars" onClick={() => this.onMenuClick}><FontAwesomeIcon icon={faBars} /></div>
                {                  
                  window.screen.width < 768 && !this.stete.showNavItems ? null : 
                  <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="#section_1">Skills</a></li>
                    <li><a href="#section_2">Projects</a></li>
                    <li><a href="#section_3">Clients</a></li>
                    <li><a href="#section_4">Contact</a></li>
                  </ul> 
                }                               
              </ScrollspyNav>
           
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
