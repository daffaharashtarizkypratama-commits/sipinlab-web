<script setup>
import { useRouter } from 'vue-router'
import AppIcon from '@/components/base/AppIcon.vue'
import StatusBadge from '@/components/base/StatusBadge.vue'

defineProps({
  title: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['toggle-menu'])
const router = useRouter()

// Sementara memakai data tetap. Pada Modul 6 diganti data dari store Pinia.
const user = {
  name: 'Admin Laboratorium',
  role: 'admin',
}

function keluar() {
  router.push({ name: 'login' })
}
</script>

<template>
  <header class="topbar">
    <button
      class="menu-btn"
      aria-label="Buka menu"
      @click="emit('toggle-menu')"
    >
      <AppIcon name="menu" />
    </button>

    <h2 class="title">{{ title }}</h2>

    <div class="user">
      <div class="user-info">
        <strong>{{ user.name }}</strong>
        <StatusBadge :value="user.role" />
      </div>

      <div class="avatar" aria-hidden="true">
        {{ user.name.charAt(0) }}
      </div>

      <button class="logout" title="Keluar" @click="keluar">
        <AppIcon name="logout" />
        <span>Keluar</span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  height: var(--topbar-height);
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: 0 var(--space-5);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 20;
}

.menu-btn {
  display: none;
  border: 0;
  background: none;
  cursor: pointer;
  color: var(--color-text);
}

.title {
  font-size: var(--font-size-md);
  font-weight: 600;
  color: var(--color-text-muted);
}

.user {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 1.3;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--color-primary-soft);
  color: var(--color-primary);
  display: grid;
  place-items: center;
  font-weight: 700;
}

.logout {
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  border-radius: var(--radius-md);
  padding: 6px 10px;
  cursor: pointer;
  color: var(--color-text-muted);
}

.logout:hover {
  color: var(--color-danger);
  border-color: var(--color-danger);
}

@media (max-width: 960px) {
  .menu-btn {
    display: block;
  }
}

@media (max-width: 600px) {
  .user-info,
  .logout span {
    display: none;
  }

  .topbar {
    padding: 0 var(--space-4);
  }
}
</style>
