import { RouteProps } from 'react-router-dom';
import { IRoutesItem } from './router/routes';

declare module '*.mdx';

declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement >>;

    const src: string;
    export default src;
}

declare global {
    interface IPageProps<T = {}> extends T {
        routes?: IRoutesItem[]
    }
}