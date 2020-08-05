/** @jsx jsx */
import { jsx } from '@emotion/core'
import { centerd, column } from '@/style'
import { Redirect, RouteChildrenProps, useLocation } from 'react-router-dom'
import { Component } from 'react'
import qs from 'query-string'
import isEmpty from 'lodash/isEmpty'
import merge from 'lodash/merge'
import requestAPI, { APIList } from '@/api'
import Linker from '@components/common/Linker'




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
                <Linker className="wow" to="/one">LINK</Linker>
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