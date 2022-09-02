function validate() {
  var username = document.getElementById("name").value;
  var password = document.getElementById("pass").value;

  if (username == "harekrishna" && password == "12345678") {
    alert("Login was successful");
    // return false;
  } else {
    alert("login unsuccessful");
  }
}
