<script setup>
import { RouterLink, useRoute } from 'vue-router'
import AppIcon from '@/components/base/AppIcon.vue'
import logo from '@/assets/logo.svg'

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])
const route = useRoute()

// Menu tetap aktif di halaman turunannya, misalnya /alat/tambah
const aktif = (to) =>
  to === '/' ? route.path === '/' : route.path.startsWith(to)

const menu = [
  { to: '/', label: 'Dasbor', icon: 'dashboard' },
  { to: '/alat', label: 'Data Alat', icon: 'box' },
  { to: '/kategori', label: 'Kategori', icon: 'tag' },
  { to: '/peminjaman', label: 'Peminjaman', icon: 'clipboard' },
  { to: '/profil', label: 'Profil', icon: 'dashboard' },
]
</script>

<template>
  <aside class="sidebar" :class="{ open }">
    <div class="brand">
      <img :src="logo" alt="" width="36" height="36" />
      <div>
        <strong>SIPINLAB</strong>
        <small>Peminjaman Alat Lab</small>
      </div>
    </div>

    <nav>
      <RouterLink
        v-for="item in menu"
        :key="item.to"
        :to="item.to"
        class="nav-link"
        :class="{ aktif: aktif(item.to) }"
        @click="emit('close')"
      >
        <AppIcon :name="item.icon" />
        <span>{{ item.label }}</span>
      </RouterLink>
    </nav>

    <p class="versi">Versi 1.0.0</p>
  </aside>
</template>

<style scoped>
.sidebar {
  position: fixed;
  inset: 0 auto 0 0;
  width: var(--sidebar-width);
  background: var(--color-sidebar);
  color: var(--color-sidebar-text);
  display: flex;
  flex-direction: column;
  padding: var(--space-5) var(--space-4);
  z-index: 30;
  transition: transform 0.2s;
}

.brand {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: 0 var(--space-2) var(--space-5);
}

.brand strong {
  display: block;
  color: #fff;
  font-size: var(--font-size-md);
  letter-spacing: 0.04em;
}

.brand small {
  font-size: var(--font-size-xs);
}

nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.nav-link {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: 10px var(--space-3);
  border-radius: var(--radius-md);
  color: var(--color-sidebar-text);
  font-weight: 500;
  text-decoration: none;
}

.nav-link:hover {
  background: rgb(255 255 255 / 6%);
  color: #fff;
}

.nav-link.aktif {
  background: var(--color-primary);
  color: #fff;
}

.versi {
  margin-top: auto;
  font-size: var(--font-size-xs);
  padding: 0 var(--space-2);
}

@media (max-width: 960px) {
  .sidebar {
    transform: translateX(-100%);
  }

  .sidebar.open {
    transform: translateX(0);
  }
}
</style>

