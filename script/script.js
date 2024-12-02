
// Passa os parametros iniciais do codigo
const passwordLength = 10;

//Pega meu Password
const inputEl = document.querySelector("#password")



function generatePassword() {
    const chars =
        "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"
    let password = ""
        //Gera a senha com a quantidade de caracteres do meu input tipo range, mas não esta fazendo
    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
        console.log('tamanho da senha',passwordLength)
    }
    
    inputEl.value = password;

   // console.log(password);
}

function copy() {
    navigator.clipboard.writeText(inputEl.value)
}

const passwordLengthEl = document.querySelector("#password-length")
passwordLengthEl.addEventListener("input", function () {

    //const passwordLength = parseInt(oasswordLenght.value, 10)
    const passwordLength = passwordLengthEl.value
    console.log('Retorno do range',passwordLength)

    generatePassword()
})
 

document.querySelector("#copy1").addEventListener("Click", copy)
document.querySelector("#copy2").addEventListener("Click", copy)

generatePassword()


