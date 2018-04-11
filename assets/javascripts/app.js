const app = {
    init() {
        const menuButton = document.querySelector('header button');
        menuButton.addEventListener('click', (e) => {
            this.toggleMenu(e);
        });
    },
    toggleMenu(e) {
        const menuButton = e.target;
        const about = document.querySelector('#about-me');
        const body = document.querySelector('body');
        if (about.classList.contains('open')) {
            about.classList.remove('open');
            body.classList.remove('fixed');
            menuButton.classList.add('hide');
            setTimeout(() => {
                menuButton.innerHTML = "About me";
                menuButton.classList.remove('open');
                menuButton.classList.remove('hide');
            }, 300);
        } else {
            about.classList.add('open');
            body.classList.add('fixed');
            menuButton.classList.add('hide');
            setTimeout(() => {
                menuButton.innerHTML = "Close";
                menuButton.classList.add('open');
                menuButton.classList.remove('hide');
            }, 300);
        }
    }
};

app.init();