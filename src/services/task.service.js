import axios from 'axios'

export const taskservice = {
    getUserTask(userId){
        return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
    },
    doneTask(taskId){
        return axios.patch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {completed:true})
    },
}