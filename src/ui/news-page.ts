import { AppElement, html, property } from './app-element';
import './stock-element';
import store from '../store/store';
//import axios from 'axios';
import { getNewsByCompanyName } from '../services/api';

class NewsPage extends AppElement {
  

  @property()
  news = [{
    'title': 'Ainda não carregou notícias',
    'description': 'AAAA',
    'source': 'Uhuuuuuu!',
    'url': 'Ahaaaaa',
    'imgUrl': 'https://www.something.com.br'
  }];

  render () {
    //TODO: fazer o render usar a versão atualizada da lista de News
    getNewsByCompanyName("Apple", 15).then((res) => {
      const news = res.data.articles.map(article => {
        return {
          title: article.title,
          description: article.description,
          source: article.source.name,
          url: article.url,
          imgUrl: article.urlToImage
        }
      });
      console.log(news);
    });

    return html`
      ${this.news.map(it => html`
        <div>${it.title}</div>
      `)}
    `
  }
}

customElements.define('news-page', NewsPage);