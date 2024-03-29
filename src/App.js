import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation,Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
     
      <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title="MY PORTFOLIO" scroll>
              <Navigation>
                 <Link to="/">Accueil</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">contact</Link>

              </Navigation>
          </Header>
          <Drawer   title="Mon portfolio">
              <Navigation>
                  <Link to="/">Accueil</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
            <Main/>
          </Content>
      </Layout>
  </div>
    );
  }
}

export default App;
