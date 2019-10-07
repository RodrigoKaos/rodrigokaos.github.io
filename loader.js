const showContentTime = 1000; //ms
const hideLoaderTime = 800; //ms

setTimeout(function () {
  document.getElementById("loading").classList.add("animated");
  document.getElementById("loading").classList.add("fadeOut");
  
  setTimeout(function () {
    document.getElementById("loading").classList.remove("animated");
    document.getElementById("loading").classList.remove("fadeOut");
    document.getElementById("loading").style.display = "none";
  }, hideLoaderTime);
}, showContentTime);