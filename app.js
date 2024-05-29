const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const errorMessage=document.querySelectorAll('.error-2')
const errorCircle = document.querySelectorAll('.error-circle')
const visibility=document.querySelector('.see')
const invisible =document.querySelector('.not-see')
// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;



  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    errorMessage[0].classList.remove('hide');
    errorCircle[0].classList.remove('hide');
  } else {
    firstName.classList.remove('error');
    errorMessage[0].classList.add('hide');
    errorCircle[0].classList.add('hide');
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    errorMessage[1].classList.remove('hide');
    errorCircle[1].classList.remove('hide');
  } else {
    lastName.classList.remove('error');
    errorMessage[1].classList.add('hide');
    errorCircle[1].classList.add('hide');
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    errorMessage[2].classList.remove('hide');
    errorCircle[2].classList.remove('hide');
  } else {
    email.classList.remove('error');
    errorMessage[2].classList.add('hide');
    errorCircle[2].classList.add('hide');
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    errorMessage[3].classList.remove('hide');
    errorCircle[3].classList.remove('hide');
    invisible.classList.add('hide')
    visibility.classList.add('hide')


  } else {
    password.classList.remove('error');
    errorMessage[3].classList.add('hide');
    errorCircle[3].classList.add('hide');
    invisible.classList.remove('hide')
    visibility.classList.remove('hide')

  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
visibility.addEventListener( 'click' , (e) =>{
if (password.type === 'password') {
   password.type = 'text'
  invisible.classList.add('hide')
}
else{
    password.type='password'
     invisible.classList.remove('hide')
}

})
