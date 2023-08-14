const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
const alphaNumCharacters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const passwordBtn = document.getElementById("btn")
const clearBtn = document.getElementById("clear-btn")
const generatedPasswords = document.getElementById("gen-passwords")

//button event listeners
clearBtn.addEventListener("click", clearPasswordField)
passwordBtn.addEventListener("click", createPasswords)

function createPasswords() {
    //gives value of 1 or 2, based on selectbox option
    const passwordTypeValue = document.getElementById("password-type").value;
    //gives actual text of selected dropbox
    // const passwordText = passwordTypeEl.options[passwordTypeEl.selectedIndex].text;
    clearPasswordField()
    passwordTypeValue == 1 ?
    generatePasswords(characters) :
    generatePasswords(alphaNumCharacters)    
}

//clears all generated passwords
function clearPasswordField() {
    generatedPasswords.innerHTML = ""   
}

//generates 4 different 15-key passwords and renders them
function generatePasswords(characterData) {
    let passwordArray = []
        for (let j = 0; j < 4; j++) {
            let password = ""
            for (let i = 0; i < 15; i++) {
                password += characterData[Math.floor(Math.random() * characterData.length)]
            }
            passwordArray.push(password)
        }
        passwordArray.forEach((item) => {
            generatedPasswords.innerHTML +=
                `<p class = "passbox">${item}</p>` 
        })
}

//extra for future to create password based on chosen length
// passwordLengthEl.bind('click keyup', function(){
//     lengthInfo = document.getElementById("password-length").value
// })