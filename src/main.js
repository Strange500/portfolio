window.transitionToPage = function(href) {
  document.getElementById("loadingScreen").style.display = "flex"
  document.getElementById("loadingScreen").style.opacity = 1
  document.getElementById("loadingScreen").style.zIndex = 9999


  setTimeout(function() {
    window.location.href = href
  }, 1000)
}

document.addEventListener('DOMContentLoaded', function(event) {
  document.getElementById("loadingScreen").style.opacity = 0
  //document.getElementById("loadingScreen").style.display = "none"
  document.getElementById("loadingScreen").style.zIndex = -1


})