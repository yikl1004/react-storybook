import axios from 'axios'
import list, { IAPIListItem } from './list'



const axiosInstance = axios.create({
    baseURL: 'http://dummy.restapiexample.com'
})

const requestAPI = async ({ method, url }: IAPIListItem) => {
    const res = await axiosInstance.request({ method, url })
    return res.data
}

export const APIList = list
export default requestAPI
