import api from './api'

const authService = {
  async login(email, password) {
    const response = await api.post('/login', {
      email,
      password,
      device_name: 'sipinlab-web',
    })

    return response.data
  },

  async logout() {
    const response = await api.post('/logout')
    return response.data
  },

  async getMe() {
    const response = await api.get('/me')
    return response.data.data
  },
}

export default authService
