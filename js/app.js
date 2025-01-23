let ism = document.querySelector('#ism');
let sana = document.querySelector('#sana');
let manzil = document.querySelector('#manzil');
let yil = document.querySelector('#yil');
let texnolog = document.querySelector('#texnolog');
let oylik = document.querySelector('#oylik');
let tel = document.querySelector('#tel');
let accaut = document.querySelector('#accaut');
let yuborish = document.querySelector('#yuborish');
let modal = document.querySelector('#modal');
let modalBox = document.querySelector('#modalBox');
let wrapper = document.querySelector('.wrapper')
yuborish.addEventListener('click', function (event) {
    event.preventDefault();
    let isValid = true;
    if (!ism.value.trim()) {
        ism.style.border = '2px solid red';
        isValid = false;
    } else {
        ism.style.border = '1px solid #ccc';
    }

    if (!sana.value.trim()) {
        sana.style.border = '2px solid red';
        isValid = false;
    } else {
        sana.style.border = '1px solid #ccc';
    }

    if (!manzil.value.trim()) {
        manzil.style.border = '2px solid red';
        isValid = false;
    } else {
        manzil.style.border = '1px solid #ccc';
    }

    if (!yil.value.trim()) {
        yil.style.border = '2px solid red';
        isValid = false;
    } else {
        yil.style.border = '1px solid #ccc';
    }

    if (!texnolog.value.trim()) {
        texnolog.style.border = '2px solid red';
        isValid = false;
    } else {
        texnolog.style.border = '1px solid #ccc';
    }

    if (!oylik.value.trim()) {
        oylik.style.border = '2px solid red';
        isValid = false;
    } else {
        oylik.style.border = '1px solid #ccc';
    }

    if (!tel.value.trim()) {
        tel.style.border = '2px solid red';
        isValid = false;
    } else {
        tel.style.border = '1px solid #ccc';
    }

    if (!accaut.value.trim()) {
        accaut.style.border = '2px solid red';
        isValid = false;
    } else {
        accaut.style.border = '1px solid #ccc';
    }
    if (isValid) {
        modal.style.display = 'block';
        wrapper.style.display = 'none'
    }
});



let login = document.querySelector('#login');
let parol = document.querySelector('#parol');
let kirish = document.querySelector('#kirish');
let modalLogin = document.querySelector('#modalLogin');

kirish.addEventListener('click', function (event) {
    event.preventDefault();

    let isValid = true;

    if (!login.value.trim()) {
        login.style.border = '2px solid red';
        login.placeholder = "Loginni kiriting!";
        isValid = false;
    } else {
        login.style.border = '1px solid #ccc';
    }

    if (!parol.value.trim()) {
        parol.style.border = '2px solid red';
        parol.placeholder = "Parolni kiriting!";
        isValid = false;
    } else {
        parol.style.border = '1px solid #ccc';
    }

    if (isValid) {
        modalLogin.style.display = 'none'
        modalBox.style.display = 'flex';
    }
});

