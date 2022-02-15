/* Y am I doing this at 4AM */
function Login() {
    var username = document.getElementById("accountUsername").value;
    var password = document.getElementById("accountPassword").value;
    var LoginResult = document.getElementById("loginResult");

    if (username == "Ronikov" && password == "12345") {
        window.location.href="userProfile.html";
    }else{
        LoginResult.innerHTML = "Login Fail Try Again!"
    }
    
  }

  function Login1() {
    var password = document.getElementById("registerAccountPassword").value;
    var confirmPassword = document.getElementById("registerConfirmAccountPassword").value;
    var FirstName = document.getElementById("registerFirstName").value;
    var LastName = document.getElementById("registerLastName").value;
    var Email = document.getElementById("registerEmail").value;
    var LoginResult = document.getElementById("PassNotSame");

    if (password != "" || confirmPassword != "" || FirstName != "" || LastName != "" || Email != "") {
        if (password == confirmPassword && password != "" && confirmPassword != "") {
            window.location.href="userProfile.html";
        }else{
            LoginResult.innerHTML = "Password not the same";
        }
    }else{
        LoginResult.innerHTML = "Field cannot be blank";
    }

  }

  function Login2() {
    var password = document.getElementById("editAccountPassword").value;
    var confirmPassword = document.getElementById("editConfirmAccountPassword").value;
    var FirstName = document.getElementById("editFirstName").value;
    var LastName = document.getElementById("editLastName").value;
    var Email = document.getElementById("editEmail").value;
    var LoginResult = document.getElementById("PassNotSames");

    if (password != "" || confirmPassword != "" || FirstName != "" || LastName != "" || Email != "") {
        if (password == confirmPassword && password != "" && confirmPassword != "") {
            window.location.href="userProfile.html";
        }else{
            LoginResult.innerHTML = "Password not the same";
        }
    }else{
        LoginResult.innerHTML = "Field cannot be blank";
    }

  }
  

function Register() {
    window.location.href="register.html";
}
  
