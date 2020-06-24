/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { shadow } from '@style/index'


const Footer: React.FC = (props) => {
    return (
        <footer css={ footer }>
            copyright(c) CMK Corp. All Rights Reserved. 2020.06
        </footer>
    )
}

export default Footer

const footer = css`
    ${shadow}
    text-align: center;
    padding: 40px 0;
    background-color: #000;
    color: #fff;
`