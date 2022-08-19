import axios from "axios";
const BASE_URL =  'http://localhost:3000'

export async function getUsers() {
    const options = { method: 'GET', url: `${BASE_URL}/users` };
    const response = await axios.request(options)
    return response.data
  }
  
export  async function deleteUser(person) {
    const options = {
      data: {
        id: person.id
      }
    }
    const response = await axios.delete(`${BASE_URL}/user`, options)
    return response.data
  }