var form = document.getElementById("myForm")
var nome = document.getElementById("name")
var email = document.getElementById("email")
var phone = document.getElementById("phone")
var cpf = document.getElementById("cpf")
var password = document.getElementById("password")
var nameError = document.getElementById("nameError")
var emailError = document.getElementById("emailError")
var phoneError = document.getElementById("phoneError")
var cpfError = document.getElementById("cpfError")
var passwordError = document.getElementById("passwordError")
var sucesso = document.getElementById("sucesso")
var erro = document.getElementById("erro")
var isValid = true;

function validateForm() {
    if (nome.value === "") {
        nameError.style.display = "block"
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    if (email.value === "") {
        emailError.style.display = "block"
        isValid = false;
    } else {
        emailError.style.display = "none"
    }

    if (phone.value === "") {
        phoneError.style.display = "block"
        isValid = false;
    } else {
        phoneError.style.display = "none"
    }

    if (cpf.value === "") {
        cpfError.style.display = "block"
        isValid = false;
    } else {
        cpfError.style.display = "none"
    }

    if (password.value === "") {
        passwordError.style.display = "block"
        isValid = false;
    } else {
        passwordError.style.display = "none"
    }


    if (password.value || cpf || phone.value || email.value || nome.value == "") {
        erro.style.display = "block"
        event.preventDefault()
    }
    if (password.value && cpf && phone.value && email.value && nome.value != "") {
        erro.style.display = "none"
        sucesso.style.display = "block"
        setTimeout(()=>{
            form.submit()
        },1000)
        
        
        // quando uso o submit, a mensagem SUCESSO aparece mas vai embora junto com o post.
        // usei o setTimeout() para segurar o submit por 1 segundo.
    }
}
