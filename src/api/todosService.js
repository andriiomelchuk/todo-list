import axios from "./service";

export const todos = {
    get: () => axios.get('/todos')
        .then(({data}) => data),
    delete: (id) => axios.delete(`/todos/${id}`)
        .then(({data}) => data),
    post: (params) => axios.post('/todos', params)
        .then(({data}) => data),
    put: (id, params) => axios.put(`/todos/${id}`, params)
        .then(({data}) => data),
}