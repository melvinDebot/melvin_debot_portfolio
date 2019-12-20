import React from 'react';
import $ from "jquery";
import Parallax from './Parallax';

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
      </div>
      <div className="panel" data-color="blue">
        <h2>ABOUT</h2>
        <div className="blue-containt">
          <p>Dumque ibi diu moratur commeatus opperiens, quorum translationem ex Aquitania verni imbres solito crebriores prohibebant auctique torrentes, Herculanus advenit <br></br>protector domesticus, Hermogenis ex magistro equitum filius, apud Constantinopolim, ut supra rettulimus, populari quondam turbela discerpti. quo verissime referente quae Gallus egerat, damnis super praeteritis maerens et futurorum timore suspensus angorem animi quam diu potuit emendabat.</p>
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
          <a href="/"><p>LinkeInd</p></a>
          <a href="/"><p>LinkeInd</p></a>
        </div>
      </div>
    </div>
  )
}
export default OthersSection;