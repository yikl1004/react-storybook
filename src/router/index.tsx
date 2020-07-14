/** @jsx jsx */
import { jsx } from '@emotion/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '@store/index'

// components
import Index from '@pages/Index'
import One from '@pages/one'
import Two from '@pages/two'
import NotFound404 from '@pages/NotFound404'

// layout
import DefaultLayout from '@/layouts/Default'


const Root: React.FC = (props) => {
    return (
        <BrowserRouter>
            <ConnectedRouter history={ history }>
                <DefaultLayout>
                    <Switch>
                        <Route exact path="/" component={ Index } />
                        <Route exact path="/one" component={ One } />
                        <Route exact path="/two" component={ Two } />
                        <Route component={ NotFound404 } />
                    </Switch>
                </DefaultLayout>
            </ConnectedRouter>
        </BrowserRouter>
    )
}

export default Root