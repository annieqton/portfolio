'use strict';

(function(module){
  const aboutController = {};

//Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.index = () => {
    $('#about').show().siblings().hide();

  };

// open window default mail client when GET IN TOUCH button is clicked
  $(document).ready(function(){
    $('.button').on('click',function(){
      window.location.href = "mailto:annieqton@gmail.com?subject&body=your%20message%20goes%20here";
    });
  });

  module.aboutController = aboutController;
})(window);
