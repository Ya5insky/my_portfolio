
const body = document.querySelector('body')
const menuText = document.querySelectorAll('menu__inner')
const menuBtn = document.getElementById('menu__btn')
const buttonCV = document.getElementById('buttonCV')




menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')
    body.classList.toggle('active')
    buttonCV.classList.toggle('active')
})


