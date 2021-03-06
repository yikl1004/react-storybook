import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createLoadingPlugin from '@rematch/loading';
import { createBrowserHistory as createHistory } from 'history';
import { models, RootModel } from './models'

const options = {};
const loading = createLoadingPlugin(options);

export const history = createHistory();

const reducers = { router: connectRouter(history) };

/**
 * 基于 Rematch 实现的 Redux 最佳实践
 *
 * More: https://rematch.gitbook.io/handbook/
 */

export const store = init({
    redux: {
        reducers,
        middlewares: [ routerMiddleware(history) ],
        devtoolOptions: {}
    },
    models,
    plugins: [
        loading
    ]
});

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type iRootState = RematchRootState<RootModel>