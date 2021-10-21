import axios from 'axios'
require('dotenv').config();

const baseUrl = `https://mnchallenge.herokuapp.com/api/todos` 


const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

export default { 
  getAll: getAll, 
  create: create
}