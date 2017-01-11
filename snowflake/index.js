$(document).ready(function() {
  //Fade In
  $('#fadeIn').click(function() {
    $('#fadeIn').fadeIn('slow', 3000);
  });
  
  //Hiding Paragraph
  $('#hideText').click(function() {
    $('#hideText').hide();
  });
  
  //Hide Two
  $('#hideAnim').click(function() {
    $('#hideAnim').hide(2000);
  });
  
  //Changing (Click one toggle)
  $('#one').click(function() {
        if ($('#two').is(':hidden')) {
            $('#one').hide();
            $('#two').show();
        } else {
            $('#one').show();
            $('#two').hide();
        }
    });
});
  //Toggle Hide & Show
  $('#click').click(function() {
        $('#toggle').toggle();
  });
  // OnLoad Hide & Show
  $('body').load(function() {
        $('#load').hide();
      });
    	$('#trig').click(function() {
      	if ($('#load').is(':hidden')) {
        	$('#load').show();
        }
        else {
          $('#load').hide();
        }
      });
