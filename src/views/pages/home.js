import React, { Component } from 'react';
import { Link } from 'react-router';

export default class extends Component {
  constructor() {
    super();
    this.state = {
     isLoading: true, 
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
    })
  }

 renderContent = () => {
    if(!this.state.isLoading) {
      return (
        <div className="home-container">
          <div className="home-content">
            <h2>Giovanny Piovesan</h2>
            <h1>Front-end developer</h1>
            <div className="home-links">
              <ul>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/work" >Work</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }

  render() {
    if(this.state.isLoading) {
      return <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
    }

    if(!this.state.isLoading){
      return (
        <div className="home-container">
          <div className="home-content">
            <h2>Giovanny Piovesan</h2>
            <h1>Front-end developer</h1>
            <div className="home-links">
              <ul>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/work" >Work</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
}