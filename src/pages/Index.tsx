/** @jsx jsx */
import { jsx } from '@emotion/core'
import { centerd } from '@/style'


export interface IIndexPageProps {

}

export default function IndexPage(props: IIndexPageProps) {
    return (
        <div css={ centerd }>
            <h1>Index...</h1>
        </div>
    )
}