const app = {

  initialize: function()
  {
    // When a user clicks the button, it checks to see that value is not empty (including the checkbox)
    document.getElementById('send').addEventListener('click', () =>
    {
      app.validateForm();
    });
  },

  validateForm: function()
  {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const checkbox = document.getElementById('checkbox');

    if(firstName !== '' && lastName.value !== '' && app.validateEmail(email.value) && checkbox.checked === true)
    {
      // If all values are entered correctly, the submit button should dissappear and a spinner should take its place
      app.showSpinner();

      // After 3 seconds have passed replaced spinner with text that says "Thanks for signing up!"
      app.hideSpinner();
    }
    else
    {
      if(firstName.value == '')
        app.invalidInput('firstName');

      if(lastName.value == '')
        app.invalidInput('lastName');

      if(!app.validateEmail(email.value))
        app.invalidInput('email');

      if(!checkbox.checked)
        app.invalidInput('checkbox');
    }
  },

  validInput: function(name)
  {
    document.getElementById(name).classList.add('valid');
  },

  invalidInput: function(name)
  {
    document.getElementById(name).classList.add('invalid');
  },

  validateEmail: function(email)
  {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },

  showSpinner: function()
  {
    document.getElementById('send').classList.add('hidden');

    document.getElementById('loader').classList.add('visible');
  },

  hideSpinner: function()
  {
    setTimeout(function() {
      document.getElementById('loader').classList.add('hidden');

      document.getElementById('thank-you').classList.add('visible');
    }, 3000);
  }

}
