const app = {

  // default color
  pickedColor : 'white',

  initialize: function()
  {
    $('#submit').click(function () {
      var colorName = $('#color-name').val();
      app.pickedColor = colorName;

      app.getHexFor(colorName);
    });

    $('#set-background').click(function () {
      var colorName = $('#color-name').val();
      app.pickedColor = colorName;

      app.setBackgroundColor();
    });

    $('#clear').click(function () {
      app.clear();
    });
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
  },

  setBackgroundColor: function()
  {
    $('body').css('background-color', app.pickedColor);
  },

  clear: function()
  {
    app.pickedColor = 'white';
    $('body').css('background-color', 'white');
    $('#description').html('');
  }

}
