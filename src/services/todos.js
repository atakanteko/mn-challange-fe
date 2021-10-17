import axios from 'axios'
require('dotenv').config();

const baseUrl = `${process.env.REACT_APP_NOT_SECRET_CODE}/api/todos` 


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