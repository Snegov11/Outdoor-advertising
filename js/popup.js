//Модальное окно вызовы замерщика
var button_tech = document.querySelector(".wrap_content_button");
var popup_tech = document.querySelector(".modal-technician");
var close_tech = popup_tech.querySelector(".modal-close");
var name_tech = popup_tech.querySelector("[name=name]");
var phone_tech = popup_tech.querySelector("[name=phone]");
var form_tech = popup_tech.querySelector("form");

button_tech.addEventListener("click", function (evt) {
    evt.preventDefault ();
    popup_tech.classList.add("modal-show-technician"); 
})

close_tech.addEventListener("click", function (evt) {
    evt.preventDefault ();
    popup_tech.classList.remove("modal-show-technician");
    popup_tech.classList.remove("modal-error-technician");
})

form_tech.addEventListener("submit", function (evt) {
    if (!name_tech.value || !phone_tech.value) {
    evt.preventDefault ();
    popup_tech.classList.remove("modal-error-technician");
    popup_tech.offsetWidth = popup_tech.offsetWidth;
    popup_tech.classList.add("modal-error-technician");
    }
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup_tech.classList.contains("modal-show-technician")) {
            evt.preventDefault ();
            popup_tech.classList.remove("modal-show-technician");
            popup_tech.classList.remove("modal-error-technician");
        }
    }
});

//Модальное окно Бесплатная консультация

var button_cons = document.querySelector(".contacts__cont_text-button");
var popup_cons = document.querySelector(".modal-consult");
var close_cons = popup_cons.querySelector(".modal-close");
var name_cons = popup_cons.querySelector("[name=name]");
var phone_cons = popup_cons.querySelector("[name=phone]");
var form_cons = popup_cons.querySelector("form");

button_cons.addEventListener("click", function (evt) {
    evt.preventDefault ();
    popup_cons.classList.add("modal-show-consult"); 
})

close_cons.addEventListener("click", function (evt) {
    evt.preventDefault ();
    popup_cons.classList.remove("modal-show-consult");
    popup_cons.classList.remove("modal-error-consult");
})

form_cons.addEventListener("submit", function (evt) {
    if (!name_cons.value || !phone_cons.value) {
    evt.preventDefault ();
    popup_cons.classList.remove("modal-error-consult");
    popup_cons.offsetWidth = popup_cons.offsetWidth;
    popup_cons.classList.add("modal-error-consult");
    }
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup_cons.classList.contains("modal-show-consult")) {
            evt.preventDefault ();
            popup_cons.classList.remove("modal-show-consult");
            popup_cons.classList.remove("modal-error-consult");
        }
    }
});