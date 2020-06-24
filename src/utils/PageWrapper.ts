import { withRouter } from 'react-router-dom'

const PageWrapper = (component: React.FC) => {
    return withRouter(component)
}


export default PageWrapper