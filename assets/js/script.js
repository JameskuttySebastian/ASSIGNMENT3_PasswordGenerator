//Tried to create an array with all special characters but failed!....
// var tuple1 = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\","]","^","_","`","{","|","}","~","]

var spcCharArray = [32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,58,59,60,61,62,63,64,91,92,93,94,95,96,123,124,125,126];
var capLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var smlLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var nums = [0,1,2,3,4,5,6,7,8,9];


function askDetails(){
    
    var pswdLength = prompt("What is the length of the password (between 8 and 128 characters)?...");
    //checking for user cancellation
    if (pswdLength === null ){
        alert("You cancelled!....");
    }
    //checking for number
    else if (isNaN(parseInt(pswdLength))){
        alert("You entered not a number!....");
    }
    //checking for within range
    else if (parseInt(pswdLength) < 8 || parseInt(pswdLength) > 128){
        alert("You entered a number which is out of range!....");
    }
    // actual action for correct first input
    else {
        pswdLength = parseInt(pswdLength);
        charOptions = "un";
        var charArray = [];
        while(charOptions.includes("sp")||charOptions.includes("cl")||charOptions.includes("sl")||charOptions.includes("nm")){
            var charOptions = prompt("What are the characters to include?.... sp: special characters, cl: capital lettes, sl: small letters and nm: numbers. Use \",\" to separate selection.");
            if (charOptions === null ){
                alert("You cancelled!....");
            }
                if(charOptions.includes("sp")){
            }
        }
    }
}