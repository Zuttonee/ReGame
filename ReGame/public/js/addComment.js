function myFunction() {
  
  var x = document.getElementById("review").value;
  var commentLocation = document.getElementById("TestComment");

  var structure = '<div class="col-2 text-center p-1"><img class="img-fluid" src="images/User Icon.png"></img></div><div class="col-9"><h1 class="p-0">Ronikov: </h1><div style="background-color: #90C9C1; width: 100%; border:2px solid #707070;"><h1></h1>'+x+'</div></div>'
  document.getElementById("review").value = "";
  commentLocation.insertAdjacentHTML('beforeend', structure);
}
