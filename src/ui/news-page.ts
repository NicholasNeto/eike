import { AppElement, html, property } from './app-element';
import './stock-element';
import store from '../store/store';
//import axios from 'axios';
import { eikeAxios } from '../services/api';

class NewsPage extends AppElement {
  

  @property()
  news = [{
    'company': 'Noticia A',
    'name': 'AAAA',
    'headline': 'Uhuuuuuu!',
    'link': 'Ahaaaaa'
  },{
    'company': 'Noticia A',
    'name': 'AAAA',
    'headline': 'Uhuuuuuu!',
    'link': 'Ahaaaaa'
  }];

  render () {
    eikeAxios.get('/top-headlines').then((res) => console.log("loaded url", res));

    return html`
      ${this.news.map(it => html`
        <div>${it.company}</div>
      `)}
    `
  }
}

customElements.define('news-page', NewsPage);