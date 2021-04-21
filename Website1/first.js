function myFunction() {
  var x = document.getElementsByClassName("headchildsec2")[0];
  var y=document.getElementsByClassName("sl")[0];
  var z=document.getElementsByClassName("login")[0];
  var w=document.getElementsByClassName("signup")[0];
  if (x.style.display === "block" && y.style.display==="block") {
    x.style.display = "none";
    y.style.display="none";
  } else {
    x.style.display = "block";
    y.style.display="block";
    w.style.display="block";
    z.style.display="block";
  }
}