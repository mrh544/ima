const app = {

  initialize: function()
  {
    $('move-left').click(function() {
      app.moveCube('left');
    });

    $('move-right').click(function() {
      app.moveCube('right');
    });

    $('#submit').click(function () {
      var colorName = $('#color-name').val();
      app.getHexFor(colorName);
    });
  },

  // toggle css animation to move cube
  moveCube: function(direction)
  {

  },

  getHexFor: function(colorName)
  {
    $.ajax({
      url: 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json',
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      success: (response) => {
        if(response[colorName])
          $('#description').html('The color code for ' + colorName + ' is: <b>' + response[colorName] + '</b>');
        else
          $('#description').html('Error: we couldn\'t find that color!');
      },
      error: (errors) => {
        console.log(error)
      }
    });
  }

}
