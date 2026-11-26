// Mengubah error Axios menjadi pesan yang mudah dipahami pengguna.
export function pesanGalat(error) {
  if (!error.response) {
    return navigator.onLine
      ? 'Server tidak dapat dihubungi. Pastikan API sedang berjalan.'
      : 'Anda sedang luring. Periksa koneksi internet.'
  }

  const { status, data } = error.response

  if (data?.message && status !== 500) {
    return data.message
  }

  if (status === 403) {
    return 'Anda tidak memiliki izin untuk tindakan ini.'
  }

  if (status === 404) {
    return 'Data tidak ditemukan.'
  }

  return 'Terjadi kesalahan pada server. Coba lagi nanti.'
}

// Mengambil objek galat validasi Laravel (status 422).
export function galatValidasi(error) {
  return error.response?.status === 422
    ? (error.response.data.errors ?? {})
    : {}
}
