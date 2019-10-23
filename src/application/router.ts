import page from 'page';
import store from '../store/store';

const saveState = (context, next) => {
    store.dispatch({
        'type': 'CHANGE_CONTEXT',
        'context': context
    });
    next();
};
page('/', saveState, (context) => {
    console.log("barra", context);
});
page('/:stockId', saveState, (context) => {
    console.log("stockId", context);
});

page.start();