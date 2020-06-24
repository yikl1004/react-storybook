/** @jsx jsx */
import { jsx } from '@emotion/core'
import { centerd } from '@/style'


export interface IOneProps {
    
}

export default function OnePage(props: IOneProps) {
    return (
        <div css={ centerd }>
            <h1>One...</h1>
        </div>
    )
}