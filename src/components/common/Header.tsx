/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { NavLink } from 'react-router-dom'
import { shadow } from '@/style'
import ROUTES from '@router/routes'



const Header: React.FC = (props) => {
    return (
        <header css={ header }>
            <nav>
                <ul>
                    { ROUTES.map((route, index) => (
                        <li key={ index }>
                            <NavLink to={ route.path || '' }>{ route.name }</NavLink>
                            { route.hasOwnProperty('routes') && route.routes && (
                                <ul className="submenu">
                                    { route.routes.map((subRoute, subIndex) => (
                                        <li key={`submenu-${index}-${subIndex}`}>
                                            <NavLink to={`${route.path}${subRoute.path}`}>
                                                { subRoute.name }
                                            </NavLink>
                                        </li>
                                    )) }
                                </ul>
                            ) }
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
            position: relative;
            & + li {
                margin-left: 20px;     
            }
            a:link, a:visited {
                color: inherit;
            }

            &:hover {
                > .submenu {
                    display: flex;
                }
            }
        }

        &.submenu {
            display: none;
            position: absolute;
            left: 50%;
            top: 100%;
            z-index: 10;
            padding: 0;
            transform: translate(-50%, 0);
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-radius: 3px;
            &:before {
                position: absolute;
                top: -3px;
                left: 20px;
                z-index: 10;
                content: '';
                display: block;
                width: 0;
                height: 0;
                border: 0 solid transparent;
                border-right-width: 3px;
                border-left-width: 3px;
                border-bottom: 3px solid rgba(0, 0, 0, 0.3);
            }
            li {
                color: #000;
            }
        }
    }
`