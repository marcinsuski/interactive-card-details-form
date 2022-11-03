const cardName = document.querySelector("#name");
const nameOnCard = document.querySelector(".card_name_result");

const cardNumber = document.querySelector("#card");
const numOnCard = document.querySelector(".card_number_result");

const cardMonth = document.querySelector("#month");
const expMM = document.querySelector(".mm_result");

const cardYear = document.querySelector("#year");
const expYY = document.querySelector(".yy_result");

const cardCvc = document.querySelector("#cvc");
const cvcDisplay = document.querySelector(".cvc_result");

const submit = document.querySelector("#submit");
const continueBtn = document.querySelector(".continue");

const completed = document.querySelector(".success");
const form = document.querySelector(".form");

function setCardNumber(e) {
    numOnCard.innerText = format(e.target.value);
}

function setCardName(e) {
    nameOnCard.innerText = e.target.value;
}

function setCardMonth(e) {
    expMM.innerText = e.target.value;
}

function setCardYear(e) {
    expYY.innerText = e.target.value;
}

function setCardCvc(e) {
    cvcDisplay.innerText = e.target.value;
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$&");
}

function handleSubmit(e) {
    e.preventDefault();
    if (!cardName.value) {
        cardName.classList.add("error");
        cardName.parentElement.classList.add("error_msg");
    } else {
        cardName.classList.remove("error");
        cardName.parentElement.classList.remove("error_msg");
    }
    if (!cardNumber.value) {
        cardNumber.classList.add("error");
        cardNumber.parentElement.classList.add("error_msg");
    } else {
        cardNumber.classList.remove("error");
        cardNumber.parentElement.classList.remove("error_msg");
    }
    if (!cardMonth.value) {
        cardMonth.classList.add("error");
        cardMonth.parentElement.classList.add("error_msg");
    } else {
        cardMonth.classList.remove("error");
        cardMonth.parentElement.classList.remove("error_msg");
    }
    if (!cardYear.value) {
        cardYear.classList.add("error");
        cardYear.parentElement.classList.add("error_msg");
    } else {
        cardYear.classList.remove("error");
        cardYear.parentElement.classList.remove("error_msg");
    }
    if (!cardCvc.value) {
        cardCvc.classList.add("error");
        cardCvc.parentElement.classList.add("error_msg");
    } else {
        cardCvc.classList.remove("error");
        cardCvc.parentElement.classList.remove("error_msg");
    }
    if (
        cardName.value &&
        cardNumber.value &&
        cardMonth.value &&
        cardYear.value &&
        cardCvc.value
    ) {
        form.classList.add("hidden");
        completed.classList.remove("hidden");
    }
}
cardName.addEventListener("keyup", setCardName);
cardNumber.addEventListener("keyup", setCardNumber);
cardMonth.addEventListener("keyup", setCardMonth);
cardYear.addEventListener("keyup", setCardYear);
cardCvc.addEventListener("keyup", setCardCvc);
submit.addEventListener("click", handleSubmit);
