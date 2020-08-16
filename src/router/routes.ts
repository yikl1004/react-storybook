import * as Pages from '@router/pages'
import { RouteChildrenProps } from 'react-router-dom'


declare global {
    interface IRoutesItem {
        exact?: boolean;
        path?: string;
        name?: string;
        component: React.FC<any> | React.ComponentType<RouteChildrenProps>;
        routes?: IRoutesItem[]
    }

    namespace IRoutesItem {
        type routes = IRoutesItem[]
    }
}

const ROUTES: IRoutesItem[] = [
    {
        name: '메인',
        path: '/',
        exact: true,
        component: Pages.Index
    },
    {
        name: '첫번째',
        path: '/one',
        exact: true,
        component: Pages.One
    },
    {
        name: '두번째',
        exact: true,
        path: '/two',
        component: Pages.Two
    },
    {
        name: '예제',
        exact: true,
        path: '/examples',
        component: Pages.ExamplePage,
        routes: [
            {
                name: 'datepicker',
                exact: true,
                path: '/datepicker',
                component: Pages.ExampleDatepicker
            },
            {
                name: 'snackbar',
                exact: true,
                path: '/snackbar',
                component: Pages.Snackbar
            },
        ]
        
    },
    {
        name: 'Queries',
        exact: true,
        path: '/queries',
        component: Pages.QueriesPage
    }
]

export default ROUTES