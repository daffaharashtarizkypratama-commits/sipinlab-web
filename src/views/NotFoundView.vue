<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="nf">
    <h1>404</h1>
    <p>Halaman yang Anda cari tidak ditemukan.</p>
    <RouterLink to="/">Kembali ke dasbor</RouterLink>
  </div>
</template>

<style scoped>
.nf {
  min-height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
  gap: var(--space-2);
}

.nf h1 {
  font-size: 72px;
  color: var(--color-primary);
}
</style>
