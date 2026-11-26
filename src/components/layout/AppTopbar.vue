<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import AppIcon from '@/components/base/AppIcon.vue'
import StatusBadge from '@/components/base/StatusBadge.vue'

defineProps({
  title: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['toggle-menu'])
const auth = useAuthStore()
const router = useRouter()
const route = useRoute()

const breadcrumb = computed(() =>
  route.matched
    .filter((record) => record.meta?.title)
    .map((record) => record.meta.title),
)

async function keluar() {
  await auth.logout()
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

    <div class="heading">
      <h2 class="title">{{ title }}</h2>

      <nav
        v-if="breadcrumb.length"
        class="breadcrumb"
        aria-label="Breadcrumb"
      >
        <span
          v-for="(item, index) in breadcrumb"
          :key="index"
          class="breadcrumb-item"
        >
          <span v-if="index > 0" class="separator">/</span>
          {{ item }}
        </span>
      </nav>
    </div>

    <div class="user">
      <div class="user-info">
        <strong>{{ auth.user?.name }}</strong>
        <StatusBadge v-if="auth.user" :value="auth.user.role" />
      </div>

      <div class="avatar" aria-hidden="true">
        {{ auth.user?.name?.charAt(0) }}
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
  min-height: var(--topbar-height);
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-5);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 20;
}

.heading {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.title {
  margin: 0;
  font-size: var(--font-size-md);
  font-weight: 600;
  color: var(--color-text-muted);
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 7px;
  color: var(--color-text-muted);
  font-size: var(--font-size-xs);
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 7px;
}

.separator {
  color: var(--color-border);
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
    border: 0;
    background: none;
    cursor: pointer;
    color: var(--color-text);
  }
}

@media (max-width: 600px) {
  .user-info,
  .logout span {
    display: none;
  }

  .topbar {
    padding: var(--space-3) var(--space-4);
  }
}
</style>
