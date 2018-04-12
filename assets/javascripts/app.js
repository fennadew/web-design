const app = {
    init() {
        domElements.menuButton.addEventListener('click', (e) => {
            events.toggleMenu(e);
        });
        for (let i = 0; i < domElements.images.length; i++) {
            domElements.images[i].addEventListener('click', (function (i) {
                return function () {
                    events.currentImg = i;
                    events.showModal();
                    events.showContent();
                }
            })(i));
        }
        document.addEventListener('click', function(e){
            if(e.target.classList.contains('modal')){
                domElements.modal.classList.remove('open');
            }
        });
        domElements.back.addEventListener('click', function(e){
                if(events.currentImg > 0) {
                    events.currentImg -= 1;
                    events.showContent();
                }
        });
        domElements.next.addEventListener('click', function(e){
            if(events.currentImg <= domElements.images.length - 1) {
                events.currentImg += 1;
                events.showContent();
            }
        });
    }
};

const domElements = {
    about: document.querySelector('#about-me'),
    body: document.querySelector('body'),
    menuButton: document.querySelector('header button'),
    images: document.querySelectorAll('.showcase a'),
    modal: document.querySelector('.modal'),
    modalImg: document.querySelector('.modal img'),
    back: document.querySelector('.navigation.left'),
    next: document.querySelector('.navigation.right'),
}

const events = {
    currentImg: 0,
    showModal() {
        domElements.modal.classList.add('open');
    },
    showContent() {
        domElements.modalImg.src = domElements.images[this.currentImg].querySelector('img').src;
    },
    toggleMenu(e) {
        const menuButton = e.target;
        domElements.about.classList.toggle('open');
        domElements.body.classList.toggle('fixed');
        menuButton.classList.toggle('hide');
        if (domElements.about.classList.contains('open')) {
            setTimeout(() => {
                menuButton.innerHTML = "About me";
                menuButton.classList.remove('open');
                menuButton.classList.remove('hide');
            }, 300);
        } else {
            setTimeout(() => {
                menuButton.innerHTML = "Close";
                menuButton.classList.add('open');
                menuButton.classList.remove('hide');
            }, 300);
        }
    }
}
app.init();