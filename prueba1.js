var textos = document.querySelectorAll("#navbarTogglerDemo02 a");
var savetext = [];

for (var i = 0; i < textos.length; i++) {
  console.log(textos[i].innerText);
  savetext.push(textos[i].innerText);
}
console.log(savetext);
