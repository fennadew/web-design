import { domElements} from "./domElements";

export const events = {
    showContent(name) {
        const i = Number(name);
        const before = i - 1;
        const after = i + 1;
        if (i === 0) {
            domElements.back.classList.add('hide')
            domElements.next.classList.remove('hide');
            domElements.next.setAttribute('href', '#photos/'+ after);
        } else if (i === domElements.images.length - 1) {
            domElements.back.classList.remove('hide')
            domElements.next.classList.add('hide')
            domElements.back.setAttribute('href', '#photos/'+ before);
        } else {
            domElements.back.classList.remove('hide')
            domElements.next.classList.remove('hide');
            domElements.back.setAttribute('href', '#photos/'+ before);
            domElements.next.setAttribute('href', '#photos/'+ after);
        }

        domElements.tags[0].innerHTML = domElements.images[i].getAttribute('data-theme');
        domElements.tags[0].setAttribute('href', '#');
        domElements.tags[1].innerHTML = domElements.images[i].getAttribute('data-continent');
        domElements.tags[1].setAttribute('href', '#');
        domElements.popUptext.innerHTML = "Interested in pictures of <span>" + domElements.images[i].getAttribute('data-theme') + "</span> or pictures that are taken in <span>" + domElements.images[i].getAttribute('data-continent') + "</span>?"
        domElements.modalImg.src = domElements.images[i].querySelector('img').getAttribute('data-src');
        domElements.modalHeading.innerHTML = domElements.images[i].querySelector('figcaption').innerHTML;
        domElements.modalText.innerHTML = domElements.images[i].querySelector('p').innerHTML;
    },
    toggleMenu(e) {
        const menuButton = e.target;
        domElements.about.classList.toggle('open');
        domElements.body.classList.toggle('fixed');
        domElements.body.classList.toggle('white');
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