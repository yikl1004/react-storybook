/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import Root from '@/router'
import { global } from './style'


export default function App() {
    return (
        <div css={ css`display: flex; flex-direction: column; height: 100%;` }>
            <Global styles={ global } />
            <Root/>
        </div>
    )
}