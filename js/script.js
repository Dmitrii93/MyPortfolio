$(document).ready(function(){
//Functions

const addRemoveClass = (el, myClass)=>{
    el.classList.toggle(myClass);
}

function getCoords(elem) { 
    var box = elem.getBoundingClientRect();
  
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  
  }

  const myScroll = (fromWhere, toWhere)=>{
    fromWhere.addEventListener('click', (e)=> {
        e.preventDefault();
        window.scrollTo({
          top: getCoords(toWhere).top,
          behavior:'smooth'
        })
      })
  };
//vars
let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let about = document.querySelector('.about');
let exp = document.querySelector('.experience');
let skills = document.querySelector('.skills');
let portfolio = document.querySelector('.portfolio');
let contacts = document.querySelector('.contacts');

let idAbout = document.getElementById('about'),
idexp = document.getElementById('experience'),
idSkills = document.getElementById('skills'),
idPortfolio = document.getElementById('portfolio'),
idContacts = document.getElementById('contacts');

let myForm = document.querySelector('.contacts__form');


//Burger btn
burger.addEventListener('click', (e)=>{
    addRemoveClass(e.currentTarget, 'change');
    addRemoveClass(menu,'active')
})

//scrolls 
myScroll(idAbout,about);
myScroll(idexp,exp);
myScroll(idSkills,skills);
myScroll(idPortfolio,portfolio);
myScroll(idContacts,contacts);

myScroll(document.querySelector('.promo__link:first-child'), portfolio);
myScroll(document.querySelector('.promo__link:nth-child(2)'),about)

// mailer

myForm.addEventListener('submit', function (e) {
  e.preventDefault();
  $.ajax({
    type: "post",
    url:"mailer/smart.php",
    data: $(this).serialize()
  }).done(function () {
    $(this).find("input").val("");
    $(this).find("textarea").val("");
    myForm.trigger('reset');
  });
  return false;
})

}); //end jquery