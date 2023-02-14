
// Assignment Code
var generateBtn = document.querySelector("#generate");


//The combinations that will be used to create a safe password

var charString = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklnmopqrstuvwxyz", "0123456789", "~!@#$%^&*()-_=+"];
//Lc-> lowerCase, Up->upperCase, n->Numeric,Sch->Special Character
var Lc=false;
var Up=false;
var N=false;
var Sch=false;

var userInput=[];

var password = "";

//Function for generating  password.
function generatePassword (){
  var passwordLength=prompt(" Between 8 and 128, how many characters do you want your password to have?");
  if(passwordLength<8 || passwordLength>128 ){
   alert("Your password must be between 8 and 128 characters ");
    
  }
  else
 {
   // userInput is an array push values into it.
     Lc=confirm("Do you want to use LowerCase");
      if(Lc==true){
        userInput.push(charString[0]);
    }
  

    var Up=confirm("Do you want to use UpperCase");
      if(Up==true){
        userInput.push(charString[1]);
      }
    
    var N=confirm("Do you want to use Numbers");
    if(N==true){
      userInput.push(charString[2]);
    }
    
    var Sch=confirm("Do you want to use Special Characters");
    if(Sch==true){
      userInput.push(charString[3]);
    }
  }
  
  //join all array elements into a single one, and then split in order
  // to get an array of characters
  userInput = userInput.join("").split("");

  for (var i = 0; i < passwordLength; i++) {
    var index = (Math.floor(Math.random() * userInput.length));
    password = password + userInput[index]
    
  }
  return password
  
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


