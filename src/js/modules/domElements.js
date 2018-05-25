export const domElements = {
    about: document.querySelector('#about-me'),
    body: document.querySelector('body'),
    images: document.querySelectorAll('.showcase a'),
    modalImg: document.querySelector('#details img'),
    modalHeading: document.querySelector('#details h1'),
    modalText: document.querySelector('#details time'),
    back: document.querySelector('.navigation.left'),
    next: document.querySelector('.navigation.right'),
    modalCLose: document.querySelector('.navigation.close'),
    selectboxButton: document.querySelectorAll('.selectbox button'),
    selectbox: document.querySelectorAll('.filter-small .selectbox'),
    checkboxesTheme: document.getElementsByName("theme"),
    checkboxesContinent: document.getElementsByName("continents"),
    allCheckboxes: document.querySelectorAll('.selectbox input[type="checkbox"'),
    counts: document.querySelectorAll(".filter-small .count"),
    tags: document.querySelectorAll('.tags'),
    radioButtons: document.querySelectorAll('input[type="radio"')
}
