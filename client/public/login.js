const bcrypt = require('bcrypt');
// this is the start of bcrypt

const saltRounds = 10;
const textPassword = '';
const salt = bcrypt.genSaltSync(saltRounds);

const hashedPassword = await bcrypt.hashSync(textPassword, salt);

const username = '';
const insertUserQuesry = ''
await debug.query(insertUserQuery, [username, password]);

// TO DO: save user passwords inside of sql using schema

console.log(hashedPassword);

const loginFormHandler = async (event) => {
  event.preventDefault();
 console.log("logging in...");
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

module.exports({loginFormHandler});
