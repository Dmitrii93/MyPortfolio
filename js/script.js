
//Functions

const addRemoveClass = (el, myClass)=>{
    el.classList.toggle(myClass);
}
//vars
let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');

//Burger btn
burger.addEventListener('click', (e)=>{
    addRemoveClass(e.currentTarget, 'change');
    addRemoveClass(menu,'active')
})