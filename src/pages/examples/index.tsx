/** @jsx jsx */
import { jsx } from '@emotion/core'
import { centerd } from '@/style'

import Popup from '@components/sample/Popup'
import { useCallback, useState } from 'react'

interface IProps {}

const ExamplePage: React.FC<IPageProps<IProps>> = (props) => {
    const [open, setOpen] = useState<boolean>(false)
    const openPopup = useCallback(() => {
        setOpen(true)
    }, [])

    return (
        <div css={ centerd }>
            <h1>Examples</h1>
            <button type="button" onClick={ openPopup }>팝업 띄우기</button>
            <Popup open={ open } onClose={ open => setOpen(open) } />
        </div>
    )
}

export default ExamplePage