<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  type: { type: String, default: 'danger' },
  message: { type: String, default: '' },
})
</script>

<template>
  <div v-if="message" class="alert" :class="`alert-${type}`" role="alert">
    <AppIcon :name="type === 'success' ? 'check' : 'alert'" :size="18" />
    <span>{{ message }}</span>
  </div>
</template>

<style scoped>
.alert {
  display: flex;
  gap: var(--space-2);
  align-items: flex-start;
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-4);
  font-weight: 500;
}

.alert-danger {
  background: var(--color-danger-soft);
  color: var(--color-danger);
}

.alert-success {
  background: var(--color-success-soft);
  color: var(--color-success);
}

.alert-warning {
  background: var(--color-warning-soft);
  color: var(--color-warning);
}

.alert-info {
  background: var(--color-info-soft);
  color: var(--color-info);
}
</style>
