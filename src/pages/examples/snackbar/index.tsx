/** @jsx jsx */
import { jsx } from '@emotion/core'
import { centerd } from '@/style'
import { OptionsObject } from 'notistack';
import { Component, Fragment, useEffect } from 'react';
import { loremIpsum } from 'lorem-ipsum'
import { Redirect, RouteChildrenProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch, iRootState } from '@/store';



interface ISnackbarProp extends RouteChildrenProps {

}

const mapState = ({ noti }: iRootState) => ({
    notifications: noti.notifications
})
const mapDispatch = (dispatch: Dispatch) => ({
    enqueueSnackbar: dispatch.noti.ENQUEUE_SNACKBAR,
    closeSnackbar: dispatch.noti.CLOSE_SNACKBAR,
    removeSnackbar: dispatch.noti.REMOVE_SNACKBAR
})

type ConnectedProps = ISnackbarProp
    & ReturnType<typeof mapState>
    & ReturnType<typeof mapDispatch>

class Snackbar extends Component<ConnectedProps> {
    
    
    componentDidMount() {
        this.props.enqueueSnackbar({
            key: 'snackbar-test',
            message: [ loremIpsum(), loremIpsum(), loremIpsum() ]
        })
    }

    componentWillUnmount() {
        this.props.removeSnackbar()
    }

    render() {
        if ( this.props.location.search ) {
            return (
                <Fragment>
                    <div css={ centerd }>
                        <h1>Snackbar</h1>
                    </div>
                </Fragment>
            )
        } else {
            return (
                <Redirect to={{
                    pathname: this.props.location.pathname,
                    search: '?wow=1'
                }} />
            )
        }

    }
}

export default connect(mapState, mapDispatch as any)(Snackbar)