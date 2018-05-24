import LazyLoad from './vendor/lazyload';
import {routes} from './modules/routes';
import {domElements} from "./modules/domElements";
import {events} from "./modules/events";
import {sort} from "./modules/sort";

const app = {
    init() {
        routes.init();
        const initLazyLoad = new LazyLoad({
            elements_selector: '.showcase figure img',
            class_loading: 'll-loading',
            class_loaded: 'll-loaded',
            class_error: 'll-error',
        });

        domElements.radioButtons[0].checked = true

        domElements.modalImg.addEventListener('click', () => {
            domElements.modalImg.classList.toggle('full-width');
        });

        domElements.menuButton.addEventListener('click', (e) => {
            events.toggleMenu(e);
        });
        for (let i = 0; i < domElements.images.length; i++) {
            domElements.images[i].setAttribute('href', '#photos/' + i);
        }
        for (let i = 0; i < domElements.radioButtons.length; i++) {
            domElements.radioButtons[i].addEventListener('click', (e) => {
                sort.sortImages("radio");
            });
        }

        for (let i = 0; i < domElements.checkboxesContinent.length; i++) {
            domElements.checkboxesContinent[i].addEventListener('click', ((i) => {
                return function () {
                    if (domElements.checkboxesContinent[i].checked) {
                        filter.continentCount += 1
                    } else {
                        filter.continentCount -= 1
                    }
                    filter.showSelection('continent');
                }
            })(i));
        }

        for (let i = 0; i < domElements.checkboxesTheme.length; i++) {
            domElements.checkboxesTheme[i].addEventListener('click', ((i) => {
                return function () {
                    if (domElements.checkboxesTheme[i].checked) {
                        filter.themeCount += 1
                    } else {
                        filter.themeCount -= 1
                    }
                    filter.showSelection('theme');
                }
            })(i));
        }

        for (let i = 0; i < domElements.selectboxButton.length; i++) {
            domElements.selectboxButton[i].addEventListener('click', ((i) => {
                return function (e) {
                    e.preventDefault();
                    events.showSelectbox(i);
                }
            })(i));
        }
        document.addEventListener('click', (e) => {
            if (!e.target.classList.contains('selectbox') && e.target.tagName !== 'LABEL' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT' && e.target.tagName !== 'BUTTON') {
                for (let i = 0; i < domElements.selectbox.length; i++) {
                    domElements.selectbox[i].classList.remove('open');
                }
            }
        });
        domElements.back.addEventListener('click', (e) => {
            if (events.currentImg > 0) {
                events.currentImg -= 1;
                events.showContent();
            }
        });
        domElements.next.addEventListener('click', (e) => {
            if (events.currentImg <= domElements.images.length - 1) {
                events.currentImg += 1;
                events.showContent();
            }
        });
    }
};

const filter = {
    themeCount: 0,
    continentCount: 0,
    checkcount: 0,
    showSelection(name) {
        if (name === 'theme') {
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

        let checkboxesChecked = [];
        let countTheme = 0;
        let countContinent = 0;

        for (let i = 0; i < domElements.allCheckboxes.length; i++) {
            if (domElements.allCheckboxes[i].checked) {
                checkboxesChecked.push(domElements.allCheckboxes[i]);
                if (domElements.allCheckboxes[i].name === "theme") {
                    countTheme += 1;
                } else {
                    countContinent += 1;
                }
            }
        }


        for (let a = 0; a < domElements.images.length; a++) {
            if (checkboxesChecked.length > 0) {
                domElements.images[a].classList.add('hidden');
            } else {
                domElements.images[a].classList.remove('hidden');
            }
        }

        for (let a = 0; a < domElements.images.length; a++) {
            let dataTheme = false;
            let dataContinent = false;
            for (let i = 0; i < checkboxesChecked.length; i++) {
                if (countTheme > 0) {
                    if (domElements.images[a].getAttribute('data-theme') === checkboxesChecked[i].value) {
                        dataTheme = true;
                    }
                } else {
                    dataTheme = true;
                }
                if (countContinent > 0) {
                    if (domElements.images[a].getAttribute('data-continent') === checkboxesChecked[i].value) {
                        dataContinent = true;
                    }
                } else {
                    dataContinent = true;
                }
            }
            if (dataTheme && dataContinent) {
                domElements.images[a].classList.remove('hidden')
            }
        }
        this.hideFilterBox();
    },
    hideFilterBox() {
        for (let i = 0; i < domElements.radioButtons.length; i++) {
            if (domElements.radioButtons[i].checked) {
                this.checkcount = 1;
            }
        }
    }
};

app.init();