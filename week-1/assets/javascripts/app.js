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

        for(let i = 0;i<domElements.checkboxesContinent.length;i++) {
            domElements.checkboxesContinent[i].addEventListener('click', (function(i) {
                return function () {
                    if(domElements.checkboxesContinent[i].checked){
                        filter.continentCount += 1
                    } else {
                        filter.continentCount -= 1
                    }
                    filter.showSelection('continent');
                }
            })(i));
        }

        for(let i = 0;i<domElements.checkboxesTheme.length;i++) {
            domElements.checkboxesTheme[i].addEventListener('click', (function(i) {
                return function () {
                    if(domElements.checkboxesTheme[i].checked){
                        filter.themeCount += 1
                    } else {
                        filter.themeCount -= 1
                    }
                    filter.showSelection('theme');
                }
            })(i));
        }

        for (let i = 0; i < domElements.selectboxButton.length; i++) {
            domElements.selectboxButton[i].addEventListener('click', (function(i) {
                return function (e) {
                    e.preventDefault();
                    events.showSelectbox(i);
                }
            })(i));
        }
        document.addEventListener('click', function(e){
            if(e.target.classList.contains('modal')){
                domElements.modal.classList.remove('open');
            }
            if(!e.target.classList.contains('selectbox') && e.target.tagName !== 'LABEL'&& e.target.tagName !== 'INPUT' && e.target.tagName !== 'BUTTON'){
                for(let i = 0; i < domElements.selectbox.length; i++) {
                    domElements.selectbox[i].classList.remove('open');
                }
            }
        });
        domElements.modalCLose.addEventListener('click', function(e){
                domElements.modal.classList.remove('open');
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
    modalHeading: document.querySelector('.modal h2'),
    modalText: document.querySelector('.modal p'),
    back: document.querySelector('.navigation.left'),
    next: document.querySelector('.navigation.right'),
    modalCLose: document.querySelector('.navigation.close'),
    selectboxButton: document.querySelectorAll('.selectbox button'),
    selectbox: document.querySelectorAll('.selectbox'),
    checkboxesTheme: document.getElementsByName("theme"),
    checkboxesContinent: document.getElementsByName("continents"),
    counts: document.querySelectorAll("form span"),
}

const filter =  {
    themeCount: 0,
    continentCount: 0,
    showSelection(name) {
        console.log(name)

        if(name === 'theme') {
            if (this.themeCount === 0) {
                domElements.counts[0].classList.add('hidden');
            } else {
                domElements.counts[0].classList.remove('hidden');
                domElements.counts[0].innerHTML = this.themeCount;
            }
        }
        else {
            if (this.continentCount === 0) {
                domElements.counts[1].classList.add('hidden');
            } else {
                domElements.counts[1].classList.remove('hidden');
                domElements.counts[1].innerHTML = this.continentCount;
            }
        }
    }

};

const events = {
    currentImg: 0,
    showModal() {
        domElements.modal.classList.add('open');
    },
    showContent() {
        if (this.currentImg === 0) {
            domElements.back.classList.add('hide')
            domElements.next.classList.remove('hide');
        } else if (this.currentImg === domElements.images.length -1) {
            domElements.back.classList.remove('hide')
            domElements.next.classList.add('hide')
        } else {
            domElements.back.classList.remove('hide')
            domElements.next.classList.remove('hide');
        }

        domElements.modalImg.src = domElements.images[this.currentImg].querySelector('img').src;
        domElements.modalHeading.innerHTML = domElements.images[this.currentImg].querySelector('figcaption').innerHTML;
        domElements.modalText.innerHTML = domElements.images[this.currentImg].querySelector('p').innerHTML;
    },
    toggleMenu(e) {
        const menuButton = e.target;
        domElements.about.classList.toggle('open');
        domElements.body.classList.toggle('fixed');
        if (domElements.about.classList.contains('open')) {
            menuButton.classList.add('hide');
            setTimeout(() => {
                menuButton.innerHTML = "Close";
                menuButton.classList.add('open');
                menuButton.classList.remove('hide');
            }, 300);
        } else {
            menuButton.classList.add('hide');
            setTimeout(() => {
                menuButton.innerHTML = "About me";
                menuButton.classList.remove('open');
                menuButton.classList.remove('hide');
            }, 300);
        }
    },
    showSelectbox(index) {
        domElements.selectbox[index].classList.toggle('open')
    }
}
app.init();