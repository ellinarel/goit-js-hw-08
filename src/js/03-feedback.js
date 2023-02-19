import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state'
const formData = {}
const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY))

const form = document.querySelector(".feedback-form")

form.addEventListener("submit", onFormSubmit)
form.addEventListener("input", throttle(onFormData,500))

populateTextarea()

function onFormData(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }

function onFormSubmit(e){
e.preventDefault();
console.log(parsedData)
console.log('Отправляем форму');
e.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY)
}

function populateTextarea(){
const data = parsedData;
const email = document.querySelector('.feedback-form input');;
const message = document.querySelector('.feedback-form textarea');
if (data) {
    return (
  (email.value = data.email || ' ' ) ,
 (message.value = data.message || ' ')
 )
}}
;