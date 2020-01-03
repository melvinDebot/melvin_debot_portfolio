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
          <h3>Lost In Chatelet</h3>
          <h4><a href="https://lost-in-chatelet.netlify.com">Voir</a></h4>
        </div>
        <div className="bobo">
          <h3>TOTO</h3>
          <h4><a href="https://toto-project.netlify.com">Voir</a></h4>
        </div>
        <div className="bobo">
          <h3>Old Portfolio</h3>
          <h4><a href="https://oldporfolio-melvin-debot.netlify.com">Voir</a></h4>
        </div>
      </div>

      
    )
  }
}

export default Project;