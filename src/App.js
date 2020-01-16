import React from 'react';
import './App.scss';
import { TimelineLite} from 'gsap';
import OthersSection from './components/OthersSection';

class App extends React.Component{
  constructor(props){
    super(props);
    this.tl = new TimelineLite();
    this.txt = new TimelineLite();
    this.state = {
      textOne : 'CREATIVE',
      textTwo : 'DEVELOPER',
      color : '',
      x : 0,
      y : 0,
      scale : 0,
      couleur : ''

    }
  }

  cursorMove = (e) =>{
    this.setState({x : e.pageX, y : e.pageY})
  }

  mouseOver = () => {
    this.setState({color : 'black'})
  }
  overText = () => {
    this.setState({scale : 3})
  }
  mouseOut = () =>{
    this.setState({color : ''})
  }

  createDivRight = () =>{
    let parent = [];
    for(let i = 0; i < 1; i++){
      let children = [];
      for(let j = 0; j < 5; j++){
        children.push(<div className="Bg-one">{this.state.textOne}</div>)
      }
      parent.push(<div className="text-wrapper right">{children}</div>)
    }
    return parent
  }
  createDivLeft = () =>{
    let parent = [];
    for(let i = 0; i < 1; i++){
      let children = [];
      for(let j = 0; j < 5; j++){
        children.push(<div className="Bg-one">{this.state.textTwo}</div>)
      }
      parent.push(<div className="text-wrapper left">{children}</div>)
    }
    return parent
  }

  componentDidMount(){
    setInterval(() => {
      this.move();
      this.scrollBar();
    }, 1000)
    this.moveText();
    
  }

  scrollBar = () =>{
    this.txt.fromTo('.scroll',1,{
      top :0,
      opacity:0
    }, {
      top:100,
      opacity:1
    })
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
      <div className="containt" onMouseMove={this.cursorMove}>
      
      <div className="scroll-bar">
        <div className="scroll"></div>
      </div>
        <section className="text">
          <ul className="network">
            <a href="/" ><li>Accuel</li></a>
            <a href="/"><li>Project</li></a>
            <a href="/"><li>Contact</li></a>
          </ul>
          <div className="text-title">
            <h1 className="title-name" onMouseOver={this.overText}>MELVIN DEBOT <span className="text-block"></span></h1>
            <h4>CREATIVE DEVELOPPER <span className="text-block"></span></h4>
          </div>
          <div className="text-Bg">
            {this.createDivRight()}
            {this.createDivLeft()}
            {this.createDivRight()}
            {this.createDivLeft()}
            {this.createDivRight()}
            {this.createDivLeft()}
            {this.createDivRight()}
          </div>
        </section>
        <OthersSection />
      </div>
    )
  }
}

export default App;
