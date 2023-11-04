import axios from "axios";


const url = 'https://jsonplaceholder.typicode.com'


const getAllUsers = async () => {
    const response = await axios.get(`${url}/users`)
    return response.data
}

const getOneUser = async (id) => {
    const response = await axios.get(`${url}/users/${id}`)
    return response.data
}

const getUserTodos = async (id) => {
    const response = await axios.get(`${url}/todos?userId=${id}`)
    return response.data
}




export { getAllUsers, getUserTodos, getOneUser }