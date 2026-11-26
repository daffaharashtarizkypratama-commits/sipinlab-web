<template>
  <div>
    <div class="page-header">
      <div>
        <h1>Profil Pengguna</h1>
        <p>Informasi akun pengguna SIPINLAB.</p>
      </div>
    </div>

    <div class="card profile-card">
      <div class="avatar">A</div>

      <div class="profile-info">
        <h2>Admin Laboratorium</h2>
        <p class="text-muted">admin@sipinlab.test</p>
        <StatusBadge value="admin" />
      </div>
    </div>
  </div>
</template>

<script setup>
import StatusBadge from '@/components/base/StatusBadge.vue'
</script>

<style scoped>
.profile-card {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-5);
}

.avatar {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--color-primary-soft);
  color: var(--color-primary);
  font-size: 24px;
  font-weight: 700;
}

.profile-info h2 {
  margin: 0 0 6px;
  font-size: var(--font-size-lg);
}

.profile-info p {
  margin: 0 0 10px;
}

@media (max-width: 480px) {
  .profile-card {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
