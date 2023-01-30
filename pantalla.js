//SELECTORES
const info = document.querySelector(".btn1");
const info2 = document.querySelector(".btn2");
const info3 = document.querySelector(".btn3");
const info4 = document.querySelector(".btn4");
const info5 = document.querySelector(".btn5");


const esconder = document.querySelector(".sect1");
const esconder2 = document.querySelector(".sect2");
const esconder3 = document.querySelector(".sect3");
const esconder4 = document.querySelector(".sect4");
const esconder5 = document.querySelector(".sect5");

//EVENTOS
info.addEventListener('click', function () {
    ocultarContenido()
})

info2.addEventListener('click', function () {
    ocultarContenido2()
})

info3.addEventListener('click', function () {
    ocultarContenido3()
})

info4.addEventListener('click', function () {
    ocultarContenido4()
})

info5.addEventListener('click', function () {
    ocultarContenido5()
})




//FUNCIONES
function ocultarContenido() {
    if (esconder.classList.contains('dnone')) {
        esconder.classList.remove('dnone')
    }else{
        esconder.classList.add('dnone')
    }

}

function ocultarContenido2() {
    if (esconder2.classList.contains('dnone')) {
        esconder2.classList.remove('dnone')
    }else{
        esconder2.classList.add('dnone')
    }

}

function ocultarContenido3() {
    if (esconder3.classList.contains('dnone')) {
        esconder3.classList.remove('dnone')
    }else{
        esconder3.classList.add('dnone')
    }

}

function ocultarContenido4() {
    if (esconder4.classList.contains('dnone')) {
        esconder4.classList.remove('dnone')
    }else{
        esconder4.classList.add('dnone')
    }

}

function ocultarContenido5() {
    if (esconder5.classList.contains('dnone')) {
        esconder5.classList.remove('dnone')
    }else{
        esconder5.classList.add('dnone')
    }

}
