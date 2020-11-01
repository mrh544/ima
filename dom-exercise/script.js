function countAllParagraphs()
{
  var response = "There are " + document.getElementsByTagName('p').length + " paragraph tags on this page.";
  document.getElementById('numberOfParagraphs').innerHTML = response;
}

function countLanguages()
{
  var response = "There are " + document.getElementById('languages').getElementsByTagName('p').length + " names of languages on this page.";
  document.getElementById('numberOfLanguages').innerHTML = response;
}

function countBoroughs()
{
  var response = "There are " + document.getElementById('boroughs').getElementsByTagName('p').length + " names of boroughs on this page.";
  document.getElementById('numberOfBoroughs').innerHTML = response;
}
