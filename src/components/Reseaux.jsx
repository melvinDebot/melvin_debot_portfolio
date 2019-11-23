import React from 'react';

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

class Reseaux extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        {this.props.posts.map((elem) => {
          return <div key={elem.id}>
            <a href=''>{elem.title}</a>
          </div>
        })}
      </div>
    )
  }
}

export default Reseaux;