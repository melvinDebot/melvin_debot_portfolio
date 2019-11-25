import React from 'react';
import ScrollMagic from 'scrollmagic';


class Scroll extends React.Component{
  render(){
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
      triggerElement: '.wrapper-two',
      reverse: true,
    })
    .setClassToggle('.containt', 'bgOne')
    .addIndicators({
        name: 'INDICATIONS',
        indent: 200,
        colorStart: 'green'
    })
    .addTo(controller);

    var scene2 = new ScrollMagic.Scene({

      triggerElement: '.wrapper-tree',
      reverse: true
    })
    
    .setClassToggle('.containt', 'bgTwo')
      .addIndicators({
        name: 'INDICATIONS',
        indent: 200,
        colorStart: 'purple'
      })
      .addTo(controller);
    return (
      <div className="containt-scroll">
        <div class="wrapper-two">
          <div class="wrapper-parent">
            <div class="parent">
              <div class="child"></div>
            </div>
          </div>
          <h2>ABOUT</h2>
        </div>
        <div class="wrapper-tree">
          <h2>CONTACT</h2>
        </div>
      </div>
    )
  }
}

export default Scroll;