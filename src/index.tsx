import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { store } from '@store/index'
import { SnackbarProvider } from 'notistack';
import SnackMessage from '@components/dev/SnackMessage';
import NotiStack from '@components/dev/NotiStack'


ReactDOM.render(
    <Provider store={ store }>
        <SnackbarProvider dense maxSnack={20}
            content={(key, message) => <SnackMessage id={key} message={message} /> }
        >
            <NotiStack />
            <App />
        </SnackbarProvider>
    </Provider>,
    document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
