//menu
const menuBurger = document.querySelector('#menu-burger');
const navMenu = document.querySelector('#nav-menu');

const toggleMenu = () => {
    navMenu.classList.toggle('is-active');
}

menuBurger.addEventListener('click', toggleMenu);

//tabs

const tabs = document.querySelectorAll('.tabs li');
const tabsContents = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => tab.classList.remove('is-active'));
        tab.classList.add('is-active');

        const tabTarget = tab.dataset.tabtarget;
        tabsContents.forEach(tabContent => {
            tabContent.getAttribute('id') === tabTarget ? 
                tabContent.classList.remove('is-hidden') 
                : tabContent.classList.add('is-hidden')
        })
    })
})

//modal

const signUpButton = document.querySelector('#sign-up');
const signUpModal = document.querySelector('#sign-up-modal');
const modalBackground = document.querySelector('.modal-background');

signUpButton.addEventListener('click', ()=> {
    signUpModal.classList.add('is-active');
})

modalBackground.addEventListener('click', ()=> {
    signUpModal.classList.remove('is-active');
})
