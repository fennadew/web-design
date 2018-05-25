import routie from "../vendor/route";
import { sections } from './sections';
import {events} from "./events";
// Checks the hash location of the website
export const routes = {
    init() {
        routie({
            '': function () {
                sections.toggle('home')
            },
            'about': function() {
                sections.toggle('about');
            },
            'contact': function() {
                sections.toggle('contact');
            },
            'photos/:name': function (name) {
                sections.toggle('details');
                events.showContent(name);
            }
        })
    }
}