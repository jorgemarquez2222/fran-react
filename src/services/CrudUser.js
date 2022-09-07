import axios from "axios";
const BASE_URL = 'http://localhost:3000'
const headers = {
    'Content-Type': 'application/json'
}

export async function getUsers() {
    const options = {
        method: 'GET',
        url: `${BASE_URL}/users`
    };
    const response = await axios.request(options)
    return response.data
}

export async function deleteUser(person) {
    const options = {
        data: {
            id: person.id
        }
    }
    const response = await axios.delete(`${BASE_URL}/user`, options)
    return response.data
}

export async function updateUser(person){
    var data = JSON.stringify(person)
    
    var config = {
      method: 'put',
      url: 'http://localhost:3000/user',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    

}

export async function addUser(name) {
    const options = {
        method: 'post',
        url: `${BASE_URL}/user`,
        headers,
        data: JSON.stringify({ name })
    };
    const response = await axios(options)
    return response.data
}