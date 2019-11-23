import React from 'react';
import './App.css';
import { TimelineLite} from 'gsap';
import Reseaux from './components/Reseaux';


class App extends React.Component{
  constructor(props){
    super(props);
    this.tl = new TimelineLite();
    this.txt = new TimelineLite();
    this.state = {
      textOne : 'CREATIVE',
      textTwo : 'DEVELOPER',
      color : ''
    }
    

  }
  mouseOver = () => {
    this.setState({color : 'black'})
  }
  mouseOut = () =>{
    this.setState({color : ''})
  }
  componentDidMount(){
    setInterval(() => {
      this.move();
    }, 1000)
    this.moveText();
    
  }
  moveText = () =>{
    this.txt.to('.text-block', 1,
      {
        scaleX : 1
      }
    )
    .to('.title-name', 0.5,
      {
        opacity : 1
      },
      "-=0.1"
    )
    .to('.text-block', 1,
      {
        scaleX : 0
      }
    )
  }
  move = () =>{
    this.tl.fromTo('.right', 18, 
      {
        x: -2000
      },
      {
        x: 2000
      }
    )
    .fromTo('.left', 18, 
      {
        x: 2000
      },
      {
        x: -2000
      },
      "-=18"
    )
  }
  render(){
    return(
      <div>
        <section className="text">
          <ul className="network">
            <a href="#"><li>Behance</li></a>
            <a href="#"><li>LinkeInd</li></a>
            <a href="#"><li>Github</li></a>
          </ul>
          <div className="text-title">
            <h1 className="title-name">MELVIN DEBOT <span className="text-block"></span></h1>
          </div>
          <div className="mail">MELVINDEBOT@GMAIL.COM</div>
          <div className="text-Bg">
            <div className="text-wrapper right">
              <div className="Bg-one" 
                onMouseOver={this.mouseOver} 
                onMouseOut={this.mouseOut} 
                >
                  {this.state.textOne}
              </div>
              <div className="Bg-one">
                {this.state.textTwo}
              </div>
              <div className="Bg-one">
                {this.state.textOne}
              </div>
              <div className="Bg-one">
                {this.state.textTwo}
              </div>
              <div className="Bg-one">
                {this.state.textOne}
              </div>
            </div>
            <div className="text-wrapper left">
              <div className="Bg-one" 
                onMouseOver={this.mouseOver} 
                onMouseOut={this.mouseOut} 
                >
                  {this.state.textOne}
              </div>
              <div className="Bg-one">
                {this.state.textTwo}
              </div>
              <div className="Bg-one">
                {this.state.textOne}
              </div>
              <div className="Bg-one">
                {this.state.textTwo}
              </div>
              <div className="Bg-one">
                {this.state.textOne}
              </div>
            </div>
            <div className="text-wrapper right">
              <div className="Bg-one" 
                onMouseOver={this.mouseOver} 
                onMouseOut={this.mouseOut} 
                >
                  {this.state.textOne}
              </div>
              <div className="Bg-one">
                {this.state.textTwo}
              </div>
              <div className="Bg-one">
                {this.state.textOne}
              </div>
              <div className="Bg-one">
                {this.state.textTwo}
              </div>
              <div className="Bg-one">
                {this.state.textOne}
              </div>
            </div>
            <div className="text-wrapper left">
              <div className="Bg-one" 
                onMouseOver={this.mouseOver} 
                onMouseOut={this.mouseOut} 
                >
                  {this.state.textOne}
              </div>
              <div className="Bg-one">
                {this.state.textTwo}
              </div>
              <div className="Bg-one">
                {this.state.textOne}
              </div>
              <div className="Bg-one">
                {this.state.textTwo}
              </div>
              <div className="Bg-one">
                {this.state.textOne}
              </div>
            </div>
            <div className="text-wrapper right">
              <div className="Bg-one" 
                onMouseOver={this.mouseOver} 
                onMouseOut={this.mouseOut} 
                style={{WebkitTextFillColor : this.state.color}}>
                  {this.state.textOne}
              </div>
              <div className="Bg-one">
                {this.state.textTwo}
              </div>
              <div className="Bg-one">
                {this.state.textOne}
              </div>
              <div className="Bg-one">
                {this.state.textTwo}
              </div>
              <div className="Bg-one">
                {this.state.textOne}
              </div>
            </div>
            <div className="text-wrapper left">
              <div className="Bg-one" 
                onMouseOver={this.mouseOver} 
                onMouseOut={this.mouseOut} 
                style={{WebkitTextFillColor : this.state.color}}>
                  {this.state.textOne}
              </div>
              <div className="Bg-one">
                {this.state.textTwo}
              </div>
              <div className="Bg-one">
                {this.state.textOne}
              </div>
              <div className="Bg-one">
                {this.state.textTwo}
              </div>
              <div className="Bg-one">
                {this.state.textOne}
              </div>
            </div>
            <div className="text-wrapper right">
              <div className="Bg-one" 
                onMouseOver={this.mouseOver} 
                onMouseOut={this.mouseOut} 
                style={{WebkitTextFillColor : this.state.color}}>
                  {this.state.textOne}
              </div>
              <div className="Bg-one">
                {this.state.textTwo}
              </div>
              <div className="Bg-one">
                {this.state.textOne}
              </div>
              <div className="Bg-one">
                {this.state.textTwo}
              </div>
              <div className="Bg-one">
                {this.state.textOne}
              </div>
            </div>
          </div>
        </section>
        <section className="scroll"></section>
      </div>
    )
  }
}

export default App;
