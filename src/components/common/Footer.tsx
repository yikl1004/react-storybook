/** @jsx jsx */
import { jsx, css } from '@emotion/core'


const Footer: React.FC = (props) => {
    return (
        <footer css={ footer }>
            copyright(c) CMK Corp. All Rights Reserved. 2020.06
        </footer>
    )
}

export default Footer

const footer = css`
    box-shadow: 1px 1px 6px 6px rgba(0, 0, 0, .3);
    text-align: center;
    padding: 40px 0;
    background-color: #000;
    color: #fff;
`