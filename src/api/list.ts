

type keys = 'employees'

export interface IAPIListItem {
    method: 'get' | 'post';
    url: string;
}

const list: Record<keys, IAPIListItem> = {
    employees: {
        method: 'get',
        url: '/api/v1/employees'
    }
}

export default list