/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { centerd, column } from '@/style'
import { Redirect, RouteChildrenProps, useLocation } from 'react-router-dom'
import { Component, Fragment } from 'react'
import qs from 'query-string'
import isEmpty from 'lodash/isEmpty'
import merge from 'lodash/merge'
import requestAPI, { APIList } from '@/api'




interface IQueriesPageProps extends RouteChildrenProps {
}

interface IQueriesPageState {
    pathname: string | undefined,
    search: {
        name: string
    };
    employees: {
        employee_age: number;
        employee_name: string;
        employee_salary: number;
        id: number;
        profile_image: string;
    }[]
}


const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

// const QueriesPage: React.FC<IQueriesPageProps> = () => {
//     const query = useQuery()
//     const { path: pathname } = useRouteMatch()
//     const search = qs.stringify({ name: 'default' })
    
//     return (
//         <div css={[centerd, column]}>
//             <h1>Queries</h1>
//             { query.get('name') ? 
//                 <p>name: { query.get('name') }</p>
//                 :
//                 <Fragment>
//                     <p>not found name query</p>
//                     <Redirect to={{ pathname, search }}/>
//                 </Fragment>
//             }
//         </div>
//     )
// }

class QueriesPage extends Component<IQueriesPageProps, IQueriesPageState> {

    state = {
        pathname: this.props.match?.path,
        search: qs.parse(this.props.history.location.search) as IQueriesPageState['search'],
        employees: [] as IQueriesPageState['employees']
    }

    static getDerivedStateFromProps(nextProps: IQueriesPageProps, prevState: IQueriesPageState) {
        const search = qs.parse(nextProps.history.location.search)
        
        return merge(prevState, { search })
    }

    async componentDidMount() {
        const { history: { location: { search } } } = this.props
        
        if ( !isEmpty(qs.parse(search)) ) {
            const res = await requestAPI(APIList.employees)

            this.setState({ employees: res.data })
        }
    }

    render() {
        const { employees } = this.state
        const { history } = this.props
        const { search, pathname } = history.location

        if ( isEmpty(qs.parse(search)) ) {
            return <Redirect to={{
                pathname,
                search: qs.stringify({ name: 'wow' }),
            }} />
        }
        return (
            <div css={[centerd, column]}>
                <h1>Queries</h1>
                <p>name: { new URLSearchParams(this.props.history.location.search).get('name') }</p>
                { employees.length &&
                    <ul>
                        { employees.map((item, index) => (
                            <li key={`item-${index}`}>
                                <span className="name">{ item.employee_name }</span> : 
                                <span className="age">{ item.employee_age }</span>
                            </li>
                        )) }
                    </ul>
                }
            </div>
        )
    }

}

export default QueriesPage