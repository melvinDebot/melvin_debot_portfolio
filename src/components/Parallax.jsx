import React from 'react';

export default class Parallax extends React.Component{
  constructor(){
    super();
    this.state = {
      offest : 0
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.parallaxShift);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallaxShift);
  }
  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset
    });
  };
  render(){
    return(
      <div>
        <div className="wrapper">
          <div className="parent">
            <div className="child" style={{top : this.state.offset / -15}}></div>
          </div>
        </div>
      </div>
    )
  }
}