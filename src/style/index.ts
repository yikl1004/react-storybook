import { css } from '@emotion/core'


export const centerd = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
`

export const global = css`
    html, body, #root {
        height: 100%;
        margin: 0;
    }
    #root {
        overflow: auto;
    }
`

export const shadow = css`
    box-shadow: 1px 1px 6px 6px rgba(0, 0, 0, .3);
`

export const column = css`
    flex-direction: column;
`