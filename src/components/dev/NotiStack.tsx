
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { Dispatch, iRootState } from '@/store';
import { isEmpty, isEqual } from 'lodash';


let displayed: string[] = [];

const Notifier = () => {
    const dispatch = useDispatch<Dispatch>();
    const notifications = useSelector((store: iRootState) => store.noti.notifications || [], shallowEqual);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const storeDisplayed = (id: string) => {
        displayed = [...displayed, id];
    };

    const removeDisplayed = (id: React.ReactText) => {
        displayed = [...displayed.filter(key => id !== key)];
    };

    useEffect(() => {
        console.log(notifications, displayed)
        if ( notifications.length ) {
            const keys = notifications.map(item => item.key)
            if ( (!isEmpty(keys) || !isEmpty(displayed)) && !isEqual(keys, displayed) ) {
                closeSnackbar()
            }

            notifications.forEach(({ key, message, options = {} }) => {    
                if (displayed.includes(key)) return;
    
                enqueueSnackbar(message, {
                    key,
                    ...options,
                    onExited: (event, myKey) => {
                        dispatch.noti.REMOVE_SNACKBAR({ key: myKey })
                        removeDisplayed(myKey);
                    },
                });
    
                storeDisplayed(key);
            })
        } else {
            closeSnackbar()
        }

    }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);

    return null;
};

export default Notifier;
