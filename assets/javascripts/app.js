const app = {
    init() {
        const menuButton = document.querySelector('header button');
        menuButton.addEventListener('click', () => {
            this.toggleMenu();
        });
    },
    toggleMenu() {
        const nav = document.querySelector('#about-me');
        const body = document.querySelector('body');
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
            body.classList.remove('fixed');
        } else {
            nav.classList.add('open');
            body.classList.add('fixed');
        }
    }
};

app.init();