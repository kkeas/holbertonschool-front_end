#!/node/usr/bin

function Welcome(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;
  function displayFullName(fullName) {
    console.log(`Welcome, ${fullName}!`)
  }
  displayFullName(fullName)
}

Welcome('Holberton', 'School')
