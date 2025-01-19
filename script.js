// 'use strict';

document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('mouseenter', function (e) {
    const parentOffset = this.getBoundingClientRect(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;

    this.querySelector('span').style.top = `${relY}px`;
    this.querySelector('span').style.left = `${relX}px`;
  });

  btn.addEventListener('mouseout', function (e) {
    const parentOffset = this.getBoundingClientRect(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;

    this.querySelector('span').style.top = `${relY}px`;
    this.querySelector('span').style.left = `${relX}px`;
  });
});

function timeUntilEndOfYear() {
  var today = new Date();
  var endOfYear = new Date(today.getFullYear() + 1, 0, 0);
  var millisecondsRemaining = endOfYear - today;

  // Количество дней
  var days = Math.floor(millisecondsRemaining / (1000 * 60 * 60 * 24));
  // Оставшиеся часы
  var hours = Math.floor((millisecondsRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // Оставшиеся минуты
  var minutes = Math.floor((millisecondsRemaining % (1000 * 60 * 60)) / (1000 * 60));
  // Оставшиеся секунды
  var seconds = Math.floor((millisecondsRemaining % (1000 * 60)) / 1000);

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

// Функция для обновления отображения счетчика
function updateCountdown() {
  var timeRemaining = timeUntilEndOfYear();

  var daysSpan = document.getElementById('days');
  var hoursSpan = document.getElementById('hours');
  var minutesSpan = document.getElementById('minutes');
  var secondsSpan = document.getElementById('seconds');

  daysSpan.textContent = timeRemaining.days;
  hoursSpan.textContent = ('0' + timeRemaining.hours).slice(-2);
  minutesSpan.textContent = ('0' + timeRemaining.minutes).slice(-2);
  secondsSpan.textContent = ('0' + timeRemaining.seconds).slice(-2);
}

// Обновляем счетчик каждую секунду
setInterval(updateCountdown, 1000);

// Запускаем счетчик сразу после загрузки страницы
updateCountdown();

console.log(document.documentElement.clientWidth);
if (document.documentElement.clientWidth > 1440) {
  let content = document.getElementById('content_2');
  window.addEventListener('scroll', function () {
    var scrolledY = window.scrollY;
    var scrolledX = window.scrollX;

    if (scrolledY > 2300 && scrolledY < 12000) {

      content.style.marginTop = 200 + 'px';
      content.style.position = "fixed";
      content.style.top = scrolledY * 0.001 + 'px';
      content.style.left = -(scrolledY - 2300) * 0.55 + 'px';

    }
    if (scrolledY <= 2300) {
      content.style.position = "initial";

    }
    if (scrolledY >= 12000) {

      content.style.position = "absolute";
      content.style.top = 12000 + 'px';

    }



    window.addEventListener('scroll', function () {
      var scrolledY = window.scrollY;

      if (scrolledY > 11000) {
        document.querySelector(".Elem1").style.opacity = 1;

        document.querySelector(".Elem1").style.transition = '1s';
      }
      if (scrolledY > 11200) {

        document.querySelector(".Elem2").style.opacity = 1;

        document.querySelector(".Elem2").style.transition = '2s';
      }
      if (scrolledY > 11400) {
        document.querySelector(".Elem3").style.opacity = 1;

        document.querySelector(".Elem3").style.transition = '3s';
      }
      if (scrolledY > 11600) {
        document.querySelector(".Elem4").style.opacity = 1;
        document.querySelector(".Elem4").style.transition = '4s';
      }
    });

  });
}
else {
  //не выполнять
}




let arrowTop = document.querySelector('.footer-arow');

arrowTop.addEventListener("click",()=>{
  document.querySelector('.home').scrollIntoView({
    behavior: 'smooth'
  });
});
document.querySelector('.arrow-home').addEventListener("click",()=>{
  document.querySelector('.forma').scrollIntoView({
    behavior: 'smooth'
  });
});



////лайки
let likes = document.querySelectorAll('.like')
let count = document.querySelectorAll('.count')
let localLikes = []
if (localStorage.getItem('localStoredLikes') != undefined) {
  localLikes = JSON.parse(localStorage.getItem('localStoredLikes'))
  for (let i = 0; i < count.length; i++) {
    if (localLikes[i] === true) {
      count[i].textContent = +count[i].textContent + 1
      likes[i].src = 'img/like.svg'
      likes[i].alt = '0'
    }
  }
}
for (let i = 0; i < likes.length; i++) {
  likes[i].id = `#like${i}`
}
for (let elem of likes) {
  elem.addEventListener('click', function () {
    if (this.alt != '1') {
      this.src = 'img/like.svg'
      this.alt = '1'
      let num = this.id.replace(/#like/, '')
      count[num].textContent = +count[num].textContent + 1
      localLikes[num] = true
      localLikes.toLocaleString()
      localStorage.setItem('localStoredLikes', JSON.stringify(localLikes))
    } else {
      this.src = 'img/Group 23.svg'
      let num = this.id.replace(/#like/, '')
      count[num].textContent = +count[num].textContent - 1
      this.alt = ''
      localLikes[num] = ''
      localLikes.toLocaleString()
      localStorage.setItem('localStoredLikes', JSON.stringify(localLikes))
    }
  })
}
if (document.documentElement.clientWidth <= 1440) {
  let blob = '<div id="blobs"><div class="blob-10"><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" overflow="hidden"><path id="blob" fill="#"d="M29.6,-50.5C43.5,-43.3,63.4,-45.7,69.1,-38.9C74.8,-32.1,66.3,-16,62.1,-2.5C57.8,11.1,57.7,22.2,52.4,29.8C47.2,37.4,36.8,41.5,27.1,39.7C17.5,38,8.8,30.4,-3,35.6C-14.8,40.8,-29.6,58.8,-36.1,58.8C-42.6,58.8,-40.8,40.7,-39.3,27.8C-37.7,15,-36.3,7.5,-42.9,-3.8C-49.5,-15.1,-64,-30.2,-63.8,-39.8C-63.5,-49.5,-48.4,-53.6,-35.3,-61.2C-22.2,-68.8,-11.1,-80,-1.6,-77.2C7.9,-74.4,15.7,-57.6,29.6,-50.5Z"transform="translate(100 100)"><animate attributeName="d" dur="10s" repeatCount="indefinite" values="M29.6,-50.5C43.5,-43.3,63.4,-45.7,69.1,-38.9C74.8,-32.1,66.3,-16,62.1,-2.5C57.8,11.1,57.7,22.2,52.4,29.8C47.2,37.4,36.8,41.5,27.1,39.7C17.5,38,8.8,30.4,-3,35.6C-14.8,40.8,-29.6,58.8,-36.1,58.8C-42.6,58.8,-40.8,40.7,-39.3,27.8C-37.7,15,-36.3,7.5,-42.9,-3.8C-49.5,-15.1,-64,-30.2,-63.8,-39.8C-63.5,-49.5,-48.4,-53.6,-35.3,-61.2C-22.2,-68.8,-11.1,-80,-1.6,-77.2C7.9,-74.4,15.7,-57.6,29.6,-50.5Z;M14.1,-24C19.7,-21.2,26.6,-20.3,33.5,-16.6C40.3,-12.9,47,-6.5,49.5,1.4C51.9,9.3,50,18.5,43.2,22.3C36.4,26.1,24.8,24.4,16.7,32.8C8.7,41.2,4.4,59.8,-5.6,69.6C-15.6,79.3,-31.2,80.3,-45,75.2C-58.8,70,-70.8,58.9,-78.1,45.4C-85.3,31.9,-87.9,15.9,-81.5,3.7C-75.1,-8.5,-59.7,-17.1,-50.3,-26.9C-40.9,-36.7,-37.5,-47.8,-30.1,-49.5C-22.7,-51.3,-11.3,-43.6,-3.5,-37.4C4.3,-31.3,8.5,-26.7,14.1,-24Z; M41.2,-63.5C53.4,-64.2,63.6,-53.4,69.6,-40.9C75.7,-28.4,77.8,-14.2,71.1,-3.9C64.4,6.5,49,12.9,38.1,17.1C27.2,21.4,20.9,23.4,15.4,26.5C9.8,29.6,4.9,33.9,0.4,33.2C-4.2,32.6,-8.3,27.2,-15.7,25C-23,22.9,-33.5,24.1,-42,20.5C-50.5,16.9,-57,8.5,-55.2,1.1C-53.4,-6.3,-43.1,-12.7,-36.9,-20.2C-30.6,-27.7,-28.4,-36.5,-22.9,-39.7C-17.4,-42.9,-8.7,-40.6,2.9,-45.5C14.4,-50.5,28.9,-62.7,41.2,-63.5Z; M29.6,-50.5C43.5,-43.3,63.4,-45.7,69.1,-38.9C74.8,-32.1,66.3,-16,62.1,-2.5C57.8,11.1,57.7,22.2,52.4,29.8C47.2,37.4,36.8,41.5,27.1,39.7C17.5,38,8.8,30.4,-3,35.6C-14.8,40.8,-29.6,58.8,-36.1,58.8C-42.6,58.8,-40.8,40.7,-39.3,27.8C-37.7,15,-36.3,7.5,-42.9,-3.8C-49.5,-15.1,-64,-30.2,-63.8,-39.8C-63.5,-49.5,-48.4,-53.6,-35.3,-61.2C-22.2,-68.8,-11.1,-80,-1.6,-77.2C7.9,-74.4,15.7,-57.6,29.6,-50.5Z"></animate></path></svg></div></div>';
  let benefit = document.querySelector('.benefit');
  benefit.insertAdjacentHTML('beforeend', blob);


  window.addEventListener('scroll', function () {
    var scrolledY = window.scrollY;

    if (scrolledY > 4000) {
      document.querySelector(".Elem1").style.opacity = 1;

      document.querySelector(".Elem1").style.transition = '1s';
    }
    if (scrolledY > 4200) {

      document.querySelector(".Elem2").style.opacity = 1;

      document.querySelector(".Elem2").style.transition = '2s';
    }
    if (scrolledY > 4400) {
      document.querySelector(".Elem3").style.opacity = 1;

      document.querySelector(".Elem3").style.transition = '2s';
    }
    if (scrolledY > 4600) {
      document.querySelector(".Elem4").style.opacity = 1;
      document.querySelector(".Elem4").style.transition = '2s';
    }
  });

} else {

}

let aAll = document.querySelectorAll("a");
aAll.forEach((element)=> {
  element.onclick = function (e) {
    e.preventDefault();
  };
});
aAll.forEach((element)=> {
  if (element.id == "home-elem") {
    element.addEventListener("click",()=>{
      document.querySelector('.home').scrollIntoView({
        behavior: 'smooth'
      });
    });
  } else if (element.id == "about-elem") {
    element.addEventListener("click",()=>{
      document.querySelector('.about').scrollIntoView({
        behavior: 'smooth'
      });
    });
  } else if (element.id == "benefit-elem") {
     element.addEventListener("click",()=>{
      document.querySelector('.benefit').scrollIntoView({
        behavior: 'smooth'
      });
    });
  } else if (element.id == "reviews-elem") {
     element.addEventListener("click",()=>{
      document.querySelector(".reviews").scrollIntoView({
        behavior: "smooth",
      });
    });
  } else if (element.id == "form-elem") {
     element.addEventListener("click",()=>{
      document.querySelector(".forma").scrollIntoView({
        behavior: "smooth",
      });
    });
  }
})

if (document.documentElement.clientWidth <= 1200) {
  document.querySelector(".blob-9").querySelector("svg").style.height =
    "2346px";
    document.querySelector(".blob-11").remove();
    document.querySelector(".blob-12").remove();
    document.querySelector(".blob-6").remove();
}
if (document.documentElement.clientWidth <= 1199 && document.documentElement.clientWidth >= 768) {
  let hamburg =
    '<nav><div class="navbar"><div class="container nav-container"><input class="checkbox" type="checkbox" name="" id="" /><div class="hamburger-lines"><span class="line line1"></span><span class="line line2"></span><span class="line line3"></span></div><div class="menu-items"><li><a href="#" class="elem_menu" id="home-elem">ГЛАВНАЯ</a></li><li><a href="#" class="elem_menu" id="about-elem">О НАС</a></li><li><a href="#" class="elem_menu" id="benefit-elem">ПРЕИМУЩЕСТВА</a></li><li><a href="#" class="elem_menu" id="reviews-elem">ОТЗЫВЫ</a></li><li><a href="#" class="elem_menu" id="form-elem">ОБРАТНАЯ СВЯЗЬ</a></li></div></div></div></nav>';
    document.querySelector(".menu").innerHTML='';
    document.querySelector(".menu").insertAdjacentHTML("afterbegin", hamburg);
    let imgHomeBlock2=document.querySelector(".home_block2").querySelector("img");
    imgHomeBlock2.remove();
    let imgAboutBlock2=document.querySelector(".about-block2").querySelector("img");
    imgAboutBlock2.remove();
    document.querySelector(".blob-2").remove();

    window.addEventListener('scroll', function () {
      var scrolledY = window.scrollY;
  
      if (scrolledY > 1800) {
        document.querySelector(".Elem1").style.opacity = 1;
  
        document.querySelector(".Elem1").style.transition = '1s';
      }
      if (scrolledY > 2000) {
  
        document.querySelector(".Elem2").style.opacity = 1;
  
        document.querySelector(".Elem2").style.transition = '2s';
      }
      if (scrolledY > 2200) {
        document.querySelector(".Elem3").style.opacity = 1;
  
        document.querySelector(".Elem3").style.transition = '2s';
      }
      if (scrolledY > 2400) {
        document.querySelector(".Elem4").style.opacity = 1;
        document.querySelector(".Elem4").style.transition = '2s';
      }
    });
    let strFooterContact="<h3>Контакты</h3>";
    document.querySelector(".contant-footer").insertAdjacentHTML("afterbegin", strFooterContact);
    let strFooterIcon="<h3>Социальные сети</h3>";
    document.querySelector(".footer-social").insertAdjacentHTML("afterbegin", strFooterIcon);
}
if (document.documentElement.clientWidth <= 767 && document.documentElement.clientWidth >= 320) {
  let hamburg =
    '<nav><div class="navbar"><div class="container nav-container"><input class="checkbox" type="checkbox" name="" id="" /><div class="hamburger-lines"><span class="line line1"></span><span class="line line2"></span><span class="line line3"></span></div><div class="menu-items"><li><a href="#" class="elem_menu" id="home-elem">ГЛАВНАЯ</a></li><li><a href="#" class="elem_menu" id="about-elem">О НАС</a></li><li><a href="#" class="elem_menu" id="benefit-elem">ПРЕИМУЩЕСТВА</a></li><li><a href="#" class="elem_menu" id="reviews-elem">ОТЗЫВЫ</a></li><li><a href="#" class="elem_menu" id="form-elem">ОБРАТНАЯ СВЯЗЬ</a></li></div></div></div></nav>';
    document.querySelector(".menu").innerHTML='';
    document.querySelector(".menu").insertAdjacentHTML("afterbegin", hamburg);
    let imgHomeBlock2=document.querySelector(".home_block2").querySelector("img");
    imgHomeBlock2.remove();
    let imgAboutBlock2=document.querySelector(".about-block2").querySelector("img");
    imgAboutBlock2.remove();
    document.querySelector(".blob-2").remove();

    window.addEventListener('scroll', function () {
      var scrolledY = window.scrollY;
  
      if (scrolledY > 800) {
        document.querySelector(".Elem1").style.opacity = 1;
  
        document.querySelector(".Elem1").style.transition = '1s';
      }
      if (scrolledY > 1000) {
  
        document.querySelector(".Elem2").style.opacity = 1;
  
        document.querySelector(".Elem2").style.transition = '2s';
      }
      if (scrolledY > 1200) {
        document.querySelector(".Elem3").style.opacity = 1;
  
        document.querySelector(".Elem3").style.transition = '2s';
      }
      if (scrolledY > 1400) {
        document.querySelector(".Elem4").style.opacity = 1;
        document.querySelector(".Elem4").style.transition = '2s';
      }
    });
    let strFooterContact="<h3>Контакты</h3>";
    document.querySelector(".contant-footer").insertAdjacentHTML("afterbegin", strFooterContact);
    let strFooterIcon="<h3>Социальные сети</h3>";
    document.querySelector(".footer-social").insertAdjacentHTML("afterbegin", strFooterIcon);
    

    document.querySelector("header").querySelector(".button").remove();
}


const form = document.querySelector('form')
const inputList = Array.from(form.querySelectorAll('.form__type-input'))
const buttonElement = form.querySelector('.button-form')
const formErrorElement = form.querySelector('.form__empty-error')

startValidation()

function startValidation() {
  toggleButton()
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (hasInvalidInput()) {
      formError()
    }
  })
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement)
      toggleButton()
    })
  })
}

function checkInputValidity(inputElement) {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage)
  } else {
    inputElement.setCustomValidity(checkLengthMismatch(inputElement))
  }
  if (!inputElement.validity.valid) {
    toggleErrorSpan(inputElement, inputElement.validationMessage)
  } else {
    toggleErrorSpan(inputElement)
  }
}

function checkLengthMismatch(inputElement) {
  if (inputElement.type !== 'text') {
    return ''
  }
  const valueLength = inputElement.value.trim().length
  if (valueLength < inputElement.minLength) {
    return `Минимальное количество символов: ${inputElement.minLength}`
  }
  return ''
}

function hasInvalidInput() {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
}

function toggleErrorSpan(inputElement, errorMessage){
  const errorElement = document.querySelector(`.${inputElement.id}-error`)
  if (errorMessage) {
    inputElement.classList.add('form__type-input-error')
    errorElement.textContent = errorMessage
    errorElement.classList.add('form__error-active')
  } else {
    inputElement.classList.remove('form__type-input-error')
    errorElement.textContent = ''
    errorElement.classList.remove('form__error-active')
  }
}

function toggleButton() {
  if (hasInvalidInput()) {
    buttonElement.classList.add('button-inactive')
    buttonElement.setAttribute('aria-disabled', 'true')
  } else {
    buttonElement.classList.remove('button-inactive')
    buttonElement.setAttribute('aria-disabled', 'false')
    formErrorElement.textContent = ''
  }
}

function formError() {
  const errorMessage = 'Заполните все поля для отправки формы.'
  formErrorElement.textContent = errorMessage
}


const button = document.querySelector(".button-form");
const names = document.querySelector(".name_input");
const email = document.querySelector(".email_input");
const text = document.querySelector(".text_input");



// button.addEventListener('click', function(e){
//   let promise = fetch('/server', {
// 		method: 'POST',
// 		body: new FormData(this) 
// 	});
// 	promise.then(
// 		response => {
// 				return response.text();
// 		}
// 	).then(
// 		text => {
// 				console.log(text)
// 		}
// 	);
//         names.value = '';
//         email.value = '';
//         text.value = '';
    
// });

form.addEventListener('submit', function(event) {
	let promise = fetch('/server.php', {
		method: 'POST',
		body: JSON.stringify({
			name:names.value,
			email:email.value,
			text:text.value
		}
			
		) // передаем ссылку на форму
	});
	promise.then(
		response => {
        return response.status();
		}
	).then(
		status => {
      console.log(status);
		}
	);
	      names.value = '';
        email.value = '';
        text.value = '';
});