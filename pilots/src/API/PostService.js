import axios from 'axios'

export default class PostService {
  static async getUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
      params: {
        _limit: 4
      }
    })
    return response
  }

  static async getUserById(id) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + id )
    return response
  }
  
  static async getPostsByUserId(id, limit=10) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        userId: id,
        _limit: limit
      }
    })
    return response
  }
  

  static async getPostById(id) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    return response
  }

  static async getCommentsById(id) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments/', {
      params: {
        postId: id
      }
    })
    return response
  }

}