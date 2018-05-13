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
            'photos/:name': function (name) {
                sections.toggle('details');
                events.showContent(name);
            }
        })
    }
}