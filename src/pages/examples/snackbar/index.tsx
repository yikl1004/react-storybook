/** @jsx jsx */
import { jsx } from '@emotion/core'
import { centerd } from '@/style'
import { Component, Fragment } from 'react';
import { loremIpsum } from 'lorem-ipsum'
import { RouteChildrenProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch, iRootState } from '@/store';
import FoldingSnackbar from '@/components/dev/FoldingSnackbar';



interface ISnackbarProp extends RouteChildrenProps {

}

const mapState = ({ noti }: iRootState) => ({
    notifications: noti.notifications
})
const mapDispatch = (dispatch: Dispatch) => ({
    enqueueSnackbar: dispatch.noti.ENQUEUE_SNACKBAR,
    closeSnackbar: dispatch.noti.CLOSE_SNACKBAR,
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

        this.props.enqueueSnackbar({
            key: 'ing',
            message: 'wow',
            options: {
                content: (key, message) => (
                    <FoldingSnackbar id={ key } message={ message } />
                ),
                anchorOrigin: { horizontal: 'right', vertical: 'top' },
                persist: true
            }
        })
    }

    componentWillUnmount() {
        this.props.closeSnackbar({ key: 'snackbar-test' })
    }

    render() {
        return (
            <Fragment>
                <div css={ centerd }>
                    <h1>Snackbar</h1>
                </div>
            </Fragment>
        )
    }
}

export default connect(mapState, mapDispatch as any)(Snackbar)