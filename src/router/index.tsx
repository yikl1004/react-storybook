/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Router, Route, Switch } from 'react-router-dom'
import { history } from '@store/index'
import ROUTES from '@router/routes'
import * as Pages from '@router/pages'

// layout
import DefaultLayout from '@/layouts/Default'


const Root: React.FC = (props) => {
    return (
        <Router history={ history }>
            <DefaultLayout>
                <Switch>
                    { ROUTES.map((route, index) => {
                        if ( route.hasOwnProperty('routes') ) {
                            return (
                                <Route path={ route.path } key={`route-${index}`}>
                                    <Switch>
                                        <Route {...route} />
                                        { route.routes && route.routes.map((subRoute, subIndex) => (
                                            <Route 
                                                key={`subroute-${index}-${subIndex}`}
                                                path={`${route.path}${subRoute.path}`}
                                                component={ subRoute.component }
                                            />
                                        ))}
                                        <Route component={ Pages.NotFound404 } />
                                    </Switch>
                                </Route>
                            )
                        } else {
                            return <Route {...route} key={`route-${index}`} />
                        }
                    }) }
                    <Route component={ Pages.NotFound404 } />
                </Switch>
            </DefaultLayout>
        </Router>
    )
}

export default Root