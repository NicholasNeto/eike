import page from 'page';
import store from '../store/store';

const saveState = alias => (context, next) => {
    store.dispatch({
        'type': 'CHANGE_CONTEXT',
        'context': {...context, alias}
    });
    next();
};
page('/', saveState('home'), (context) => {
    console.log("barra", context);
});
page('/:stockId', saveState('news'), (context) => {
    console.log("stockId", context);
});

page.start();