var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdevghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=?></|~,:;";
/*var uppercase = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var sym = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','^','_','{','|','}','~'];*/

var password = document.getElementById('password');
var button1 = document.getElementById('generate')
var button2 = document.getElementById('copy')


function getPasswordOptions () {
    var length = parseInt(prompt("What is your character length"))
    if (isNaN(length) === true) {
        alert ("Password length must be provided as a number") 
        return
    }
    if (length < 8 || length > 128){
    
        alert("Need 8-128 characters")
    }
    if (length >= 8 && length <= 128){
        var UPPER = confirm("Use uppercase letters?")
        var LOWER = confirm("Use lowercase letters?")
        var NUM = confirm("Use numbers?")
        var SYMBOLS = confirm("Use special characters?")
    }
    if (UPPER != true && LOWER != true && NUM != true && SYMBOLS != true){
    
        alert("You must select at least one character type!")
    }
    /*var passwordOption = {
        passlength: length,
        upCase: UPPER,
        lowCase: LOWER,
        num: NUM,
        char: SYMBOLS  
    }
    if (UPPER === true) {
        characters.concat(uppercase)
    }
    else if (LOWER === true) {
        characters.concat(lowercase)  
    }
    else if (NUM === true) {
        characters.concat(numbers)  
    }
    else if (SYMBOLS === true) {
        characters.concat(sym)
    }
    return passwordOption;*/
}

getPasswordOptions()

function generatepass(characters) {
    var pass = ' ';
    for (var i = 0; i < characters.length; i++){
        pass += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pass;
};

button1.addEventListener('click', function() {

    password.value = generatepass(characters)
});

button2.addEventListener('click', function () {

    password.value = copytoclip()
});


function copytoclip() {

    password.select()
    document.execCommand('copy')
    
    alert("Copied the text: " + password.value);

}

