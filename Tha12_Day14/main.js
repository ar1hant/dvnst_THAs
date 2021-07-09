var mybtn = document.getElementById("btn")

mybtn.addEventListener("mouseover", () => {
  btn.style.width = "65px";
  btn.style.height = "50px";
  btn.style.background = "yellow";
  btn.style.color = "blue";
});

mybtn.addEventListener("click", () => {
  document.getElementById("para").innerHTML =  "hello";
  setTimeout(function()
  {
    document.getElementById("para").innerHTML =  "";
  }, 500);
});

mybtn.addEventListener("mouseout", () => {
  btn.style.width = "";
  btn.style.height = "";
  btn.style.background = "";
  btn.style.color = "";
});

var divbtn = document.getElementById("d1")
divbtn.addEventListener("dblclick", function() {alert('You have double clicked on div element')}, false);