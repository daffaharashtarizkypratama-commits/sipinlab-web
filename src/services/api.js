import axios from 'axios'


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: 'application/json',
  },
  timeout: 15000,
})

// Menambahkan token autentikasi pada setiap request.
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('sipinlab_token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error),
)

// Menangani respons error dari server.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (window.location.pathname !== '/login') {
        localStorage.removeItem('sipinlab_token')
        localStorage.removeItem('sipinlab_user')
        window.location.href = '/login?sesi=habis'
      }
    }

    return Promise.reject(error)
  },
)

export default api
