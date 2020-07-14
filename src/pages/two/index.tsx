/** @jsx jsx */
import { jsx } from '@emotion/core'
import { centerd } from '@/style'
import { history } from '@/router'
import { useCallback } from 'react'


export interface ITwoProps {
    
}

const TwoPage: React.FC<ITwoProps> = (props) => {
    
    const onClick = useCallback(() => {
        history.push('/one')
    }, [])

    return (
        <div css={ centerd }>
            <h1>Two...</h1>
            <button onClick={ onClick }>첫번째로 가기</button>
        </div>
    )
}

export default TwoPage;