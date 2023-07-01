let new_password = document.querySelector('.newPassword');
let confirm_password = document.querySelector('.confirmPassword'); 
let container = document.querySelector('.container');
let msg - document.querySelector('.message');

let toggle = () => {
  if (new_password.type === 'password' && confirm_password === 'password') {
    new_password.type = 'text';
    confirm_password.type = 'text';
    document.querySelector('.fa-eye-slash').style.visibility = 'visible';
    document.querySelector('.fa-eye').style.visibility = 'hidden';
  }
  else {
    new_password.type = 'password';
    confirm_password.type = 'password';
    document.querySelector('.fa-eye-slash').style.visibility = 'hidden';
    document.querySelector('.fa-eye').style.visibility = 'visible';
  }
}

let check_password = () => {
  if (new_password.value != '' && confirm_password.value != '') {
    if (new_password.value.length >= 8 && confirm_password.value.length >= 8) {
      if (new_password.value == confirm_password.value) {
        container.style.height = '450px';
        msg.style.display = 'block';
        msg.innerHTML = "<i class = 'fa-solid fa-circle-check'> </i> Both passwords are a match.";
        msg.style.color = 'green';
      }
      else {
        container.style.height = '450px';
        msg.style.display = 'block';
        msg.innerHTML = "<i class = 'fa-solid fa-triangle-exclamation'> </i> Both passwords don't match.";
        msg.style.color = 'red';
      }
    }
    if (new_password.value.length < 8 && confirm_password.value.length < 8) {
      container.style.height = '450px';
      msg.style.display = 'block';
      msg.innerHTML = "Password must be at least 8 characters.";
    }
  }
  if (new_password.value == '' && confirm_password.value == '') {
    container.style.height = '450px';
    msg.style.display = 'block';
    msg.innerHTML = "Please enter a password.";
  }
}
