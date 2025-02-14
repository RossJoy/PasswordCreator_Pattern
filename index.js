const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let A = document.getElementById("password1");
let B = document.getElementById("password2");



// 生成密码函数
function generatePassword () {
    A.textContent = '';
    B.textContent = '';
    for (let i = 0; i < 15; i++) {
        A.textContent += characters[Math.floor(Math.random() * characters.length)];
        B.textContent += characters[Math.floor(Math.random() * characters.length)];
    }
}
console.log(A.textContent )
console.log(B.textContent)