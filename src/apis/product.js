import axiosService from "../commons/axiosService";
import { API_EDNPOINT } from './../constants/index'

// http://localhost:3000/tasks
const url ='/products'
const users ='/users'

export const getListProducts = (params = {}) => {
    return axiosService.get(`${API_EDNPOINT}${url}`)
}

export const getListUsers = (params = {}) => {
    return axiosService.get(`${API_EDNPOINT}${users}`)
}

// http://localhost:3000/tasks METHOD:POST
export const addTask = data => {
    return axiosService.post((`${API_EDNPOINT}${users}`), data)
}

// http://localhost:3000/tasks METHOD:PUT
export const updateCart = (data, ID) => {
    return axiosService.put((`${API_EDNPOINT}${users}/${ID}`), data)
}

// http://localhost:3000/tasks METHOD:DELETE
export const deleteTask = (ID) => {
    return axiosService.delete(`${API_EDNPOINT}${users}/${ID}`)
}