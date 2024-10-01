window.transitionToPage = function(href) {
  document.getElementById("loadingScreen").style.opacity = 1
  document.getElementById("loadingScreen").style.zIndex = 9999
  document.getElementById("loadingScreen").style.left = 0



  setTimeout(function() {
    window.location.href = href
  }, 1000)
}

document.addEventListener('DOMContentLoaded', function(event) {
  document.getElementById("loadingScreen").style.opacity = 0
  sleep(500).then(() => {
    document.getElementById("loadingScreen").style.left = "100vw"
    document.getElementById("loadingScreen").style.zIndex = -1

  });
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}