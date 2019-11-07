import {AppElement, html, property} from './app-element';
import {getNewsByCompanyName} from '../services/api';
import './stock-element';
import store from "../store/store";
import {connect} from "pwa-helpers/connect-mixin";

class NewsPage extends connect(store)(AppElement) {


  @property()
  news = [];

  async connectedCallback() {
    //TODO: Move to router
    super.connectedCallback();
    const {params} = store.getState().context;
    const newsRes = await getNewsByCompanyName(params.stockId, 3);
    this.news = (newsRes.data.articles as []);
  }

  render () {
    return html`
      ${this.news.map(it => html`
        <div class="p-normal sf-body m-normal sf-clickable">${it.title}</div>
      `)}
    `
  }
}

customElements.define('news-page', NewsPage);
