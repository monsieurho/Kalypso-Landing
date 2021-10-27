document.getElementById("myDIV").addEventListener("mousemove", function(event) {
  myFunction(event);
});

function myFunction(e) {
  var x = e.clientX;
  var y = e.clientY;
  var coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coor;
  console.log(coor);
}