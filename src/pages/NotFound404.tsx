/** @jsx jsx */
import { jsx } from '@emotion/core'
import { centerd } from '@style/index'
import PageWrapper from '@utils/PageWrapper'


const Notfound404: React.FC = (props: any) => {
    console.log(props)
    return (
        <div css={ centerd }>
            <h1>404 Not Found!!!</h1>
        </div>
    )
}

export default PageWrapper(Notfound404)