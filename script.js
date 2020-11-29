// variables and select html elements
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

var password = document.getElementById('password');
var button1 = document.getElementById('generate');
var button2 = document.getElementById('copy');

//Function used to determine the length of the password
function determineLength(){
    
    passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");
    
    if (passwordLength<8){
        alert("Password length must be a number between 8-128 characters");
        determineLength();
    }else if (passwordLength>128){
        alert("Password length must be a number between 8-128 characters");
        determineLength();
    }else if (isNaN(passwordLength)){
        alert("Password length must be a number between 8-128 characters");
        determineLength();
    }else{
        alert("The next three screens will ask you what types of characters you would like to be included in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
    }
    return passwordLength;
}


//Function used to determine whether the user wants to include uppercase characters in the password
function determineUppercase(){
    uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();
    
    if (uppercaseCheck === null || uppercaseCheck === ""){
        alert("Please answer Yes or No");
        determineUppercase();
        
    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
        uppercaseCheck = true;
        return uppercaseCheck;
        
    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
        uppercaseCheck = false;
        return uppercaseCheck;
        
    }else {
        alert("Please answer Yes or No");
        determineUppercase();
    }
    return uppercaseCheck;
}


//Function used to determine whether the user wants to include numbers in the password
function determineNumbers(){
    numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
    numberCheck = numberCheck.toLowerCase();
    
    if (numberCheck === null || numberCheck === ""){
        alert("Please answer Yes or No");
        determineNumbers();
        
    }else if (numberCheck === "yes" || numberCheck ==="y"){
        numberCheck = true;
        return numberCheck;
        
    }else if (numberCheck === "no" || numberCheck ==="n"){
        numberCheck = false;
        return numberCheck;
        
    }else {
        alert("Please answer Yes or No");
        determineNumbers();
    }
    return numberCheck;
}

//Function used to determine whether the user wants to include special characters in the password
function determineSpecial(){
    specialCheck = prompt("Do you want to include special characters in your password? \n(Yes or No)");
    specialCheck = specialCheck.toLowerCase();
    
    if (specialCheck === null || specialCheck === ""){
        alert("Please answer Yes or No");
        determineSpecial();
        
    }else if (specialCheck === "yes" || specialCheck ==="y"){
        specialCheck = true;
        return specialCheck;
        
    }else if (specialCheck === "no" || specialCheck ==="n"){
        specialCheck = false;
        return specialCheck;
        
    }else {
        alert("Please answer Yes or No");
        determineSpecial();
    }
    return specialCheck;
}

// Generate Password
function generatePassword(){
    
    determineLength();
    
    determineUppercase();
    
    determineNumbers();
    
    determineSpecial();
    
    
    var characters = lowercaseChar;
    var password = "";
    if (uppercaseCheck && numberCheck && specialCheck){
        characters += uppercaseChar + numberChar + specialChar;
        
    }else if (uppercaseCheck && numberCheck){
        characters += uppercaseChar + numberChar;
        
    }else if (numberCheck && specialCheck){
        characters += numberChar + specialChar;
        
    }else if (uppercaseCheck && specialCheck){
        characters += uppercaseChar + specialChar;
        
    }else if (uppercaseCheck){
        characters += uppercaseChar;
        
    }else if(numberCheck){
        characters += numberChar;
        
    }else if (specialCheck){
        characters += specialChar;
        
    }else{
        characters === lowercaseChar;
    }
    
    for(var i = 0; i < passwordLength; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

// Write password to the #password input
function writePassword() {
    var currentPassword = "";
    currentPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = currentPassword;
}

// Add event listener to generate button
button1.addEventListener("click", writePassword);

// Add event listener to copy password
button2.addEventListener('click', function () {

    password.value = copytoclip()
});


function copytoclip() {

    password.select()
    document.execCommand('copy')
    
    alert("Copied the text: " + password.value);

}