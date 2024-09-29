function loadContent(file, elementId) {
  fetch(file)
    .then(response => response.text())
    .then(data => document.getElementById(elementId).innerHTML = data);
}

window.onload = function() {
  loadContent('header-sticky.html', 'header-sticky');
  
}