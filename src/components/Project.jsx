import React from 'react';

class Project extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      opacity: 0
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll())
  }
  handleScroll = () =>{
    if(window.screenY === 500){
      console.log()
    }
  }

  render(){
    return(
        <div className="stateProject">
        <div className="bobo">
          <h3>Peugeot Cycle</h3>
          <h4><a href="https://peugeot-cycle.netlify.com">Voir</a></h4>
        </div>
        <div className="bobo">
          <h3>Peugeot Cycle</h3>
          <h4><a href="https://www.google.fr/">Voir</a></h4>
        </div>
        <div className="bobo">
          <h3>Peugeot Cycle</h3>
          <h4><a href="/">Voir</a></h4>
        </div>
        <div className="bobo">
          <h3>Peugeot Cycle</h3>
          <h4><a href="/">Voir</a></h4>
        </div>
      </div>

      
    )
  }
}

export default Project;