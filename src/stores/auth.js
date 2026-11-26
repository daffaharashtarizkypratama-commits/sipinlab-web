import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import authService from '@/services/authService'

// Token dan data pengguna disimpan di localStorage
// agar sesi tetap tersedia setelah halaman dimuat ulang.
export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('sipinlab_token') || '')
  const user = ref(JSON.parse(localStorage.getItem('sipinlab_user') || 'null'))

  // Getter
  const isLoggedIn = computed(() => Boolean(token.value))
  const isAdmin = computed(() => user.value?.role === 'admin')

  // Action login
  async function login(email, password) {
    const hasil = await authService.login(email, password)

    token.value = hasil.token
    user.value = hasil.user

    localStorage.setItem('sipinlab_token', hasil.token)
    localStorage.setItem('sipinlab_user', JSON.stringify(hasil.user))
  }

  // Action logout
  async function logout() {
    try {
      await authService.logout()
    } finally {
      // Hapus sesi lokal meskipun permintaan logout gagal.
      token.value = ''
      user.value = null

      localStorage.removeItem('sipinlab_token')
      localStorage.removeItem('sipinlab_user')
    }
  }

  return {
    token,
    user,
    isLoggedIn,
    isAdmin,
    login,
    logout,
  }
})
