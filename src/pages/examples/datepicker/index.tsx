/** @jsx jsx */
import { jsx } from '@emotion/core'
import { centerd } from '@style/index'
import { Component } from 'react'
import { Dispatch, iRootState } from '@/store'
import { RouteChildrenProps } from 'react-router-dom'
import { connect } from 'react-redux'

interface IProps {

}

const mapState = ({ noti }: iRootState) => ({
    notifications: noti.notifications
})
const mapDispatch = (dispatch: Dispatch) => ({
    enqueueSnackbar: dispatch.noti.ENQUEUE_SNACKBAR,
    closeSnackbar: dispatch.noti.CLOSE_SNACKBAR,
})

type ConnectedProps = IProps
    & ReturnType<typeof mapState>
    & ReturnType<typeof mapDispatch>
    & RouteChildrenProps

class DatepickerPage extends Component<ConnectedProps> {

    componentDidMount() {
        this.props.enqueueSnackbar({
            key: 'datepicker',
            message: [ '11111', '22222', '33333' ]
        })
    }

    componentWillUnmount() {
        this.props.closeSnackbar({ key: 'datepicker' })
    }

    render() {
        return (
            <div css={ centerd }>
                <h1>Datepicker</h1>
            </div>
        )
    }
}

export default connect(mapState, mapDispatch as any)(DatepickerPage)