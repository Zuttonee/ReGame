function searchGame() {
  
    var x = document.getElementById("searchGame").value;
    var searchGameLocation = document.getElementById("searchGameContainer");

    if (x == "Call of Duty IV"){
        structure = '<div class="container">'+
                        '<div class="row">'+

                            '<div class="col-6 col-md-4 col-lg-3">'+
                                '<div class="card px-5">'+
                                    '<img src="images/Call of Duty IV.png" class="img-fluid card-img-top">'+
                                    '<div class="card-block">'+
                                        '<h1 class="card-title">Call of Duty IV</h1>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';
    }
    document.getElementById("searchGame").value = "";
    searchGameLocation.insertAdjacentHTML('beforeend', structure);
  }
  
