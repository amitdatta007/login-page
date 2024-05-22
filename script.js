const passShowBtn = document.querySelector('#password-show');
const passField = document.querySelector('#pass-field');

passShowBtn.addEventListener('click', () => {
    if(passShowBtn.querySelector('i').classList.contains('fa-eye')){
        passShowBtn.querySelector('i').classList.remove('fa-eye');
        passShowBtn.querySelector('i').classList.add('fa-eye-slash');
        passField.setAttribute('type', 'text')
    } else {
        passShowBtn.querySelector('i').classList.remove('fa-eye-slash');
        passShowBtn.querySelector('i').classList.add('fa-eye');
        passField.setAttribute('type', 'password')
    }
})