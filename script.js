var generateBtn = document.querySelector("#generate");

function writePassword () {
  const length = window.prompt("How long would you like your password to be? (Has to be between 8 and 128)")

  if (!length) {
    (length <8 || length > 128) 
      alert("I said it has to be between 8 and 128!");
      writePassword();

    } else {

    const hasLower = window.confirm(" Would you like lowercase letters?");
    const hasUpper = window.confirm(" Would you like uppercase letters?");
    const hasNumber = window.confirm(" Would you like numbers?");
    const hasSymbol = window.confirm(" Would you like special characters?");

    const passwordText =document.getElementById ("password");

    passwordText.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
  }
}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

// event listener added to button
generateBtn.addEventListener ("click", writePassword);

function generatePassword (lower, upper, number, symbol, length) {
  let generatePassword = "";

  
  const typesCount = lower + upper + symbol + number;


  const typesArr = [{lower}, {upper}, {symbol}, {number}].filter(item => Object.values(item)[0]);

  for (let i=0; i<length; i+=typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0]
      generatePassword += randomFunc[funcName]();
    })
  }

  var endPassword = generatePassword.slice(0,length);

  endPassword - shuffle(endPassword);

console.log(endPassword)
return endPassword

}

function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random()*26) + 97)
}

function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random()*26) + 97)
}

function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random()*26) + 97)
}

function getRandomSymbol () {
    const symbols = "!@#$%^&*()[]{}"
  return symbols[Math.floor(Math.random()* symbols.length)];
}

function shuffle(s) {
  var arr = s.split ('');

  arr.sort(function(){
      return 0.5 - Math.random();
  });
  s - arr.join('');
  return s;
}
