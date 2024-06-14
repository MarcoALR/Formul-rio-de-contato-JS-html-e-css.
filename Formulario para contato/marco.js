document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    
    var isValid = true;
    
    if(name.value === '') {
        document.getElementById('nameError').style.display = 'block';
        document.getElementById('nameError').textContent = 'Este campo não foi preenchido';
        name.classList.add('inputError');
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
        name.classList.remove('inputError');
    }
    
    if(email.value === '') {
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('emailError').textContent = 'Este campo não foi preenchido';
        email.classList.add('inputError');
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
        email.classList.remove('inputError');
    }
    
    if(message.value === '') {
        document.getElementById('messageError').style.display = 'block';
        document.getElementById('messageError').textContent = 'Este campo não foi preenchido';
        message.classList.add('inputError');
        isValid = false;
    } else {
        document.getElementById('messageError').style.display = 'none';
        message.classList.remove('inputError');
    }
    
    if(isValid) {
        alert('Mensagem enviada com sucesso!');
    }
});