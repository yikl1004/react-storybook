/** @jsx jsx */
import { jsx } from '@emotion/core'
import { centerd } from '@style/index'

interface IProps {

}

const DatepickerPage: React.FC<IProps> = (props) => {
    return (
        <div css={ centerd }>
            <h1>Datepicker</h1>
        </div>
    )
}

export default DatepickerPage