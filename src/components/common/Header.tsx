/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom'
import { shadow } from '@/style'


const linkList = [
    { display: '메인', to: '/' },
    { display: '첫번째', to: '/one' }
]

const Header: React.FC = (props) => {
    return (
        <header css={ header }>
            <nav>
                <ul>
                    { linkList.map(({ display, to }, index) => (
                        <li key={ index }>
                            <Link to={ to }>{ display }</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header

const header = css`
    ${shadow}
    background-color: #000;
    color: #fff;
    ul {
        display: flex;
        justify-content: center;
        margin: 0;
        li {
            display: inherit;
            padding: 10px 15px;
            & + li {
                margin-left: 20px;     
            }
            a:link, a:visited {
                color: inherit;
            }
        }
    }
`