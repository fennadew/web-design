import {domElements} from "./domElements";

export const sort = {
    type: "latest",
    sortImages(input) {
        console.log("yes")
        const ul = document.querySelectorAll('.column');


        if(input === 'radio') {
            for (let i = 0; i < domElements.radioButtons.length; i++) {
                if (domElements.radioButtons[i].checked) {
                    this.type = domElements.radioButtons[i].value
                }
            }

            const x = document.getElementsByClassName("custom-select");
            const selElmnt = x[0].getElementsByTagName("select")[0];

            for (let i = 0; i < selElmnt.options.length; i++) {
                if (this.type === selElmnt.options[i].innerHTML.toLowerCase()) {
                    selElmnt.selectedIndex = i;
                }
            }
            const a = document.querySelector('.select-selected')
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        } else {
            const x = document.getElementsByClassName("custom-select");
            const selElmnt = x[0].getElementsByTagName("select")[0];
            this.type = selElmnt.options[selElmnt.selectedIndex].innerHTML.toLowerCase()
        }

        if (this.type === "latest") {
            // With help from https://stackoverflow.com/questions/8837191/sort-an-html-list-with-javascript

            for (let a = 0; a < ul.length; a++) {
                const new_ul = ul[a].cloneNode(false);

                const lis = [];
                for (let i = ul[a].childNodes.length; i--;) {

                    if (ul[a].childNodes[i].nodeName === 'A') {
                        lis.push(ul[a].childNodes[i]);
                    }
                }

                lis.sort(function (a, b) {
                    let aDate = "" + a.childNodes[0].nextElementSibling.children[1].innerHTML;
                    let aSplitDate = aDate.split("-");
                    let aNewDate = aSplitDate[1] + "/" + aSplitDate[0] + "/" + aSplitDate[2];
                    let bDate = b.childNodes[0].nextElementSibling.children[1].innerHTML;
                    let bSplitDate = bDate.split("-");
                    let bNewDate = bSplitDate[1] + "/" + bSplitDate[0] + "/" + bSplitDate[2];
                    return new Date(bNewDate) - new Date(aNewDate);
                });

                for (let i = 0; i < lis.length; i++)
                    new_ul.appendChild(lis[i]);
                ul[a].parentNode.replaceChild(new_ul, ul[a]);
            }
        } else {
            // With help from https://stackoverflow.com/questions/8837191/sort-an-html-list-with-javascript

            for (let a = 0; a < ul.length; a++) {
                const new_ul = ul[a].cloneNode(false);

                const lis = [];
                for (let i = ul[a].childNodes.length; i--;) {

                    if (ul[a].childNodes[i].nodeName === 'A') {
                        lis.push(ul[a].childNodes[i]);
                    }
                }

                lis.sort(function (a, b) {
                    let aDate = "" + a.childNodes[0].nextElementSibling.children[1].innerHTML;
                    let aSplitDate = aDate.split("-");
                    let aNewDate = aSplitDate[1] + "/" + aSplitDate[0] + "/" + aSplitDate[2];
                    let bDate = b.childNodes[0].nextElementSibling.children[1].innerHTML;
                    let bSplitDate = bDate.split("-");
                    let bNewDate = bSplitDate[1] + "/" + bSplitDate[0] + "/" + bSplitDate[2];
                    return new Date(aNewDate) - new Date(bNewDate);
                });


                for (let i = 0; i < lis.length; i++)
                    new_ul.appendChild(lis[i]);
                ul[a].parentNode.replaceChild(new_ul, ul[a]);
            }
        }
    }
}