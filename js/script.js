function init(){
  var input = document.getElementById('entryinput');
  var button = document.getElementById('entrybutton');
  var name = document.getElementsByClassName('center')[1];
  var output = document.getElementById('textoutput');

  function myAlertFunction(){
    alert(name.textContent + ': ' + input.value);
  }

  function myOutputFunction(){
    output.innerHTML = input.value;
  }

  button.addEventListener('click', myAlertFunction);
  button.addEventListener('click', myOutputFunction);
}
window.addEventListener('load', init);