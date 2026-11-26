<template>
  <div>
    <div class="page-header">
      <div>
        <h1>Form Alat</h1>
        <p>Tambah atau ubah data alat.</p>
      </div>
    </div>

    <div class="card">
      <p class="text-muted">ID alat: {{ $route.params.id ?? '(data baru)' }}</p>
      <p class="text-muted">Form ini dibuat pada Modul 8.</p>
    </div>
  </div>
</template>
