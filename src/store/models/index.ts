// import { ENQUEUE_SNACKBAR, CLOSE_SNACKBAR, REMOVE_SNACKBAR } from './actions';

import { OptionsObject } from 'notistack';

// const defaultState = {
//     notifications: [],
// };

interface INotiItem {
    key: string;
    message: string | string[];
    options?: OptionsObject
}

interface INotiState {
    notifications: INotiItem[]
}

const noti = {
    state: {
        notifications: [] as INotiState['notifications']
    },

    reducers: {
        ENQUEUE_SNACKBAR(prev: INotiState, payload: INotiItem): INotiState {
            if ( Array.isArray(payload.message) ) {
                return {
                    notifications: payload.message.map(
                        (msg, index) => ({
                            key: `${payload.key}${index}`,
                            message: msg, 
                            options: payload.options || { persist: true, variant: 'error' }
                        })
                    )
                }
            }
            return {
                ...prev,
                notifications: [
                    ...prev.notifications,
                    { 
                        key: payload.key,
                        message: payload.message,
                        options: payload.options || { persist: true, variant: 'error' }
                    },
                ],
            };
        },
        CLOSE_SNACKBAR(prev: INotiState, payload?: { key: INotiItem['key'] }): INotiState {
            if ( !payload ) {
                return { notifications: [] }
            }
            return {
                ...prev,
                notifications: prev.notifications.filter((notification: any) => (
                    notification.key !== payload.key
                )),
            };
        },
        REMOVE_SNACKBAR(prev: INotiState, payload?: { key: INotiItem['key'] }): INotiState {
            if ( !payload ) return { notifications: [] }
            return {
                notifications: prev.notifications.filter((notification: any) => {
                    return !notification.key.includes(payload.key)
                })
            };
        }
    }
};



const common = {
    state: {
        wow: 'wow'
    },
    reducers: {
        add: (state: any, payload: any) => `${state}${payload}`,
    }
}

// no need to extend from Models
export interface RootModel {
    common: typeof common;
    noti: typeof noti
}

export const models: RootModel = { 
    common,
    noti,
}

export default common