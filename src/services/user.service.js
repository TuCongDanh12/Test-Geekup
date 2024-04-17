import axios from 'axios'

export const userservice = {
    getUser(){
        return axios.get('https://jsonplaceholder.typicode.com/users')
    }
}