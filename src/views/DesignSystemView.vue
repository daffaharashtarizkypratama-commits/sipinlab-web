<script setup>
import { ref } from 'vue'
import AppIcon from '@/components/base/AppIcon.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import StatusBadge from '@/components/base/StatusBadge.vue'
import StatCard from '@/components/base/StatCard.vue'

const nama = ref('')
const email = ref('')
const emailError = ref('Email wajib diisi dan harus valid.')
</script>

<template>
  <main class="design-system">
    <header class="page-header">
      <div>
        <p class="eyebrow">SIPINLAB / DESIGN SYSTEM</p>
        <h1>Komponen Dasar</h1>
        <p class="subtitle">Kumpulan komponen antarmuka SIPINLAB berdasarkan rancangan Figma.</p>
      </div>
      <span class="version">Modul 4.5</span>
    </header>

    <section class="demo-section">
      <div class="section-heading">
        <div>
          <h2>01. AppIcon</h2>
          <p>Ikon garis yang dapat digunakan kembali.</p>
        </div>
      </div>

      <div class="icon-list">
        <div class="icon-item">
          <AppIcon name="dashboard" :size="24" />
          <span>Dashboard</span>
        </div>
        <div class="icon-item">
          <AppIcon name="box" :size="24" />
          <span>Box</span>
        </div>
        <div class="icon-item">
          <AppIcon name="search" :size="24" />
          <span>Search</span>
        </div>
        <div class="icon-item">
          <AppIcon name="plus" :size="24" />
          <span>Plus</span>
        </div>
        <div class="icon-item">
          <AppIcon name="edit" :size="24" />
          <span>Edit</span>
        </div>
        <div class="icon-item">
          <AppIcon name="check" :size="24" />
          <span>Check</span>
        </div>
        <div class="icon-item">
          <AppIcon name="alert" :size="24" />
          <span>Alert</span>
        </div>
        <div class="icon-item">
          <AppIcon name="download" :size="24" />
          <span>Download</span>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <div class="section-heading">
        <div>
          <h2>02. BaseButton</h2>
          <p>Variasi tombol berdasarkan properti variant dan size.</p>
        </div>
      </div>

      <div class="component-content">
        <div class="variant-group">
          <span class="variant-label">Variant</span>
          <div class="button-list">
            <BaseButton variant="primary">Primary</BaseButton>
            <BaseButton variant="secondary">Secondary</BaseButton>
            <BaseButton variant="danger">Danger</BaseButton>
            <BaseButton variant="ghost">Ghost</BaseButton>
          </div>
        </div>

        <div class="variant-group">
          <span class="variant-label">Size</span>
          <div class="button-list">
            <BaseButton size="md">Medium Button</BaseButton>
            <BaseButton size="sm">Small Button</BaseButton>
            <BaseButton loading>Loading</BaseButton>
            <BaseButton disabled>Disabled</BaseButton>
          </div>
        </div>

        <div class="variant-group">
          <span class="variant-label">Block</span>
          <BaseButton block>Full Width Button</BaseButton>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <div class="section-heading">
        <div>
          <h2>03. BaseInput</h2>
          <p>Contoh input normal dan input dengan pesan galat.</p>
        </div>
      </div>

      <div class="input-grid">
        <div>
          <span class="variant-label">Input Normal</span>
          <BaseInput
            v-model="nama"
            label="Nama Lengkap"
            placeholder="Masukkan nama lengkap"
            hint="Masukkan nama sesuai identitas."
          />
        </div>

        <div>
          <span class="variant-label">Input Error</span>
          <BaseInput
            v-model="email"
            label="Alamat Email"
            type="email"
            placeholder="nama@email.com"
            :error="emailError"
          />
        </div>
      </div>
    </section>

    <section class="demo-section">
      <div class="section-heading">
        <div>
          <h2>04. StatusBadge</h2>
          <p>Variasi badge untuk menunjukkan kondisi dan status.</p>
        </div>
      </div>

      <div class="badge-list">
        <div class="badge-item">
          <StatusBadge value="baik" />
          <span>Baik</span>
        </div>
        <div class="badge-item">
          <StatusBadge value="rusak_ringan" />
          <span>Rusak Ringan</span>
        </div>
        <div class="badge-item">
          <StatusBadge value="rusak_berat" />
          <span>Rusak Berat</span>
        </div>
        <div class="badge-item">
          <StatusBadge value="dipinjam" />
          <span>Dipinjam</span>
        </div>
        <div class="badge-item">
          <StatusBadge value="dikembalikan" />
          <span>Dikembalikan</span>
        </div>
        <div class="badge-item">
          <StatusBadge value="terlambat" />
          <span>Terlambat</span>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <div class="section-heading">
        <div>
          <h2>05. StatCard</h2>
          <p>Kartu statistik dengan variasi ikon dan warna.</p>
        </div>
      </div>

      <div class="stat-grid">
        <StatCard
          label="Total Alat"
          value="128"
          icon="box"
          tone="primary"
          note="Jumlah seluruh alat laboratorium"
        />
        <StatCard
          label="Kondisi Baik"
          value="105"
          icon="check"
          tone="success"
          note="Alat siap digunakan"
        />
        <StatCard
          label="Perlu Perbaikan"
          value="15"
          icon="alert"
          tone="warning"
          note="Alat rusak ringan"
        />
        <StatCard
          label="Rusak Berat"
          value="8"
          icon="alert"
          tone="danger"
          note="Alat membutuhkan penanganan"
        />
      </div>
    </section>

    <footer class="page-footer">SIPINLAB — Sistem Informasi Peminjaman Alat Laboratorium</footer>
  </main>
</template>

<style scoped>
.design-system {
  max-width: 1120px;
  margin: 0 auto;
  padding: var(--space-6);
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.eyebrow {
  margin: 0 0 var(--space-2);
  color: var(--color-primary);
  font-size: var(--font-size-xs);
  font-weight: 700;
  letter-spacing: 0.08em;
}

.page-header h1 {
  font-size: var(--font-size-xl);
  font-weight: 700;
}

.subtitle,
.section-heading p {
  margin: var(--space-2) 0 0;
  color: var(--color-muted);
}

.version {
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  background: var(--color-primary-soft);
  color: var(--color-primary);
  font-size: var(--font-size-xs);
  font-weight: 700;
}

.demo-section {
  padding: var(--space-5);
  margin-bottom: var(--space-4);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.section-heading {
  margin-bottom: var(--space-4);
}

.section-heading h2 {
  font-size: var(--font-size-md);
  font-weight: 700;
}

.section-heading p {
  font-size: var(--font-size-sm);
}

.icon-list,
.button-list,
.badge-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
}

.icon-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-width: 110px;
  padding: var(--space-3);
  color: var(--color-text);
  background: var(--color-bg);
  border-radius: var(--radius-md);
}

.icon-item span,
.badge-item span {
  font-size: var(--font-size-xs);
}

.component-content,
.variant-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.variant-label {
  color: var(--color-muted);
  font-size: var(--font-size-xs);
  font-weight: 700;
}

.input-grid,
.stat-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-5);
}

.input-grid > div {
  min-width: 0;
}

.badge-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3);
  background: var(--color-bg);
  border-radius: var(--radius-md);
}

.stat-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.page-footer {
  padding: var(--space-4) 0;
  color: var(--color-muted);
  text-align: center;
  font-size: var(--font-size-xs);
}

@media (max-width: 640px) {
  .design-system {
    padding: var(--space-4);
  }

  .page-header {
    align-items: flex-start;
  }

  .input-grid,
  .stat-grid {
    grid-template-columns: 1fr;
  }

  .demo-section {
    padding: var(--space-4);
  }
}
</style>
