/** @jsx jsx */
import { jsx } from '@emotion/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import Index from '@pages/Index'
import One from '@pages/one'
import NotFound404 from '@pages/NotFound404'

// layout
import DefaultLayout from '@/layouts/Default'

const Root: React.FC = (props: any) => {
    return (
        <Router>
            <DefaultLayout>
                <Switch>
                    <Route exact path="/" component={ Index } />
                    <Route exact path="/one" component={ One } />
                    <Route component={ NotFound404 } />
                </Switch>
            </DefaultLayout>
        </Router>
    )
}

export default Root