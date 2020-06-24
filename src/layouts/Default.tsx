/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Fragment } from 'react'

// component
import { Header, Footer } from '@components/common'


const DefaultLayout: React.FC = (props) => {

    return (
        <Fragment>
            <Header />
            { props.children }
            <Footer />
        </Fragment>
    )
}

export default DefaultLayout
