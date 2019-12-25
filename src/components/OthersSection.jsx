import React from 'react';
import $ from "jquery";
import Parallax from './Parallax';
import Project from './Project';

function OthersSection(){


  // Animation Background
  $(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);

    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });

        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    });    
    
  }).scroll();
  return(
    <div>
      <div className="panel" data-color="white">
        <h2>PROJECT</h2>
        <Project />
      </div>
      <div className="panel" data-color="blue">
        <h2>ABOUT</h2>
        <div className="blue-containt">
          <p>Hey je suis étudinat en 2ème année de bachelor web à HETIC, je suis actuellement à la recherce d’une alternance en tant que développer front end Prêt à franchir le cap pour acquérir et développer mes compétences dans les métiers de l’internet. J’aspire à évoluer dans un contexte international et à avoir de nouvelles perspectives. <br></br>Prêt à franchir le cap pour acquérir et développer mes compétences dans les métiers de l’internet. J’aspire à évoluer dans un contexte international et à avoir de nouvelles perspectives.</p>

          <div className="blue-img">
            <Parallax />
          </div>
        </div>
      </div>
      <div className="panel" data-color="orange">
        <h2>CONTACT</h2>
        <div className="contact-text">
          <p>Don’t be a stranger</p>
          <p>just say hello.</p>
          <p>melvin.debot@hetic.net</p>
          <a href="https://www.linkedin.com/in/melvin-debot-b22078173/"><p>LinkeInd</p></a>
          <a href="/"><p>Behance</p></a>
        </div>
      </div>
    </div>
  )
}
export default OthersSection;