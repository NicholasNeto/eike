import { AppElement, html, customElement } from "./app-element";

import './news-page';
import './stocks-page';
import store from "../store/store";
import { property } from "lit-element";

@customElement("app-manager")
class AppManager extends AppElement {

    @property()
    currentPage = "";
    
    constructor() {
        super()
        store.subscribe(() => this.changeRoute(store.getState()));
        this.changeRoute(store.getState());
    }

    private changeRoute(state : any): void {
        const { context } = state;
        this.currentPage = context.alias;
    }

    render() {

        switch (this.currentPage) {
            case 'news':
                return html`<news-page style="height:50%"/>`;

            default:
                return html`<stocks-page style="height:50%"/>`
        }
    }



}