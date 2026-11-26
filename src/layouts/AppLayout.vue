<script setup>
import { ref } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppTopbar from '@/components/layout/AppTopbar.vue'

// Kerangka halaman setelah masuk: menu samping + bilah atas + isi halaman
const route = useRoute()
const menuTerbuka = ref(false)
</script>

<template>
  <div class="layout">
    <AppSidebar
      :open="menuTerbuka"
      @close="menuTerbuka = false"
    />

    <div
      v-if="menuTerbuka"
      class="backdrop"
      @click="menuTerbuka = false"
    ></div>

    <div class="main">
      <AppTopbar
        :title="route.meta.title"
        @toggle-menu="menuTerbuka = !menuTerbuka"
      />

      <main class="content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.main {
  margin-left: var(--sidebar-width);
  min-height: 100vh;
}

.content {
  padding: var(--space-5);
  max-width: 1200px;
}

.backdrop {
  display: none;
}

@media (max-width: 960px) {
  .main {
    margin-left: 0;
  }

  .backdrop {
    display: block;
    position: fixed;
    inset: 0;
    background: rgb(15 23 42 / 40%);
    z-index: 25;
  }

  .content {
    padding: var(--space-4);
  }
}
</style>
