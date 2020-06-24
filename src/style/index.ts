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
    }
    #root {
        overflow: auto;
    }
`