var button1 = document.querySelector('.button1');
var button2 = document.querySelector('.button2');
var button3 = document.querySelector('.button3');
var button4 = document.querySelector('.button4');
var buttonTask6 = document.querySelector('.buttonTask6');
var inp1 = document.querySelector('.inp1');
var inp2 = document.querySelector('.inp2');
var inp3 = document.querySelector('.inp3');
var inpTask6 = document.querySelector('.inpTask6');
var image = document.querySelector('.image');
var images = ['smile', 'quate', 'love'];

// Задание 1

button1.addEventListener('click', stringLength);

function stringLength(){
    alert('Количество символов в строке: ' + inp1.value.length);
    document.forms.form1.reset();
}

// Задание 2

button2.addEventListener('click', imagesCreator);

function imagesCreator(){
   for (let i = 0; i < images.length; i++) {
      image.innerHTML += "<img src='images/" + images[i] + ".jpg'>"
       
   } 
}

// Задание 3

button3.addEventListener('click', urlCutter);

function urlCutter(){
    let str = inp2.value;
    if (str.search('http://') != -1) {
       alert('Ваш домен ' + str.slice(7));
  } else if(str.search('https://') != -1){
       alert('Ваш домен ' + str.slice(8));
  }    
   else{
    alert('Ваш домен ' + str);    
    }
   document.forms.form2.reset();
}

// Задание 4

button4.addEventListener('click', urlChange);

function urlChange(){
    let url = inp3.value;
    let pattern = /\w*\.ua/i;
    let result = url.match(pattern);
    alert(result);
}

// Задание 5
let form = document.forms.form3;
let elems = form.elements;
let submit1 = form.elements.submit1;
submit1.addEventListener('click', validate);
let error = 0;

function validate(e){
    e.preventDefault();
    error = 0;
    resetError(elems.name.parentNode);
    if (!elems.name.value) {
        showError(elems.name.parentNode, ' Укажите имя.');
      }
    resetError(elems.surname.parentNode);
    if (!elems.surname.value) {
    showError(elems.surname.parentNode, ' Укажите фамилию.');
    }
    resetError(elems.password.parentNode);
    if (!elems.password.value) {
    showError(elems.password.parentNode, ' Укажите пароль.');
    }
    else if(elems.password.value.length < 5){
    showError(elems.password.parentNode, ' Пароль не менее 5 символов.');    
    }    
    resetError(elems.email.parentNode);
    if (!elems.email.value) {
    showError(elems.email.parentNode, ' Укажите email.');
    }
    else if (elems.email.value.search('@') == -1) {
    showError(elems.email.parentNode, ' Email должен содержать символ @.');
    }
    else if (elems.email.value.search(' ') != -1) {
    showError(elems.email.parentNode, ' Email не должен содержать пробелов.');
    } 

    for(let i=0; i<elems.length; i++){
        if(elems[i] != submit1){
        elems[i].value = elems[i].value.replace(/\s+/g,'');
        }
    }
    
    alert('AAA' + elems.name.value + 'AAA');
    // elems.name.value = elems.name.value.replace(/\s+/g,'');

    
    

    if(error === 1){
        return alert('Форма заполнена неправильно');        
    }
    else{
      alert('Форма отправлена');
    form.submit();
    }
    



}



function showError(container, errorMessage) {
      container.className = 'error';
      var msgElem = document.createElement('span');
      msgElem.className = "error-message";
      msgElem.innerHTML = errorMessage;
      container.appendChild(msgElem);
      error = 1;
    }

    function resetError(container) {
      container.className = '';
      if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
      }      
    }















// Задание 6

buttonTask6.addEventListener('click', codeSimbol);

function codeSimbol(){
    alert('Код символа: ' + inpTask6.value.charCodeAt());
}