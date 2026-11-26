import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { title: 'Masuk' },
  },
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/DashboardView.vue'),
        meta: { title: 'Dasbor' },
      },
      {
        path: 'alat',
        name: 'alat',
        component: () => import('@/views/alat/AlatListView.vue'),
        meta: { title: 'Data Alat' },
      },
      {
        path: 'alat/tambah',
        name: 'alat-tambah',
        component: () => import('@/views/alat/AlatFormView.vue'),
        meta: { title: 'Tambah Alat' },
      },
      {
        path: 'alat/:id/ubah',
        name: 'alat-ubah',
        component: () => import('@/views/alat/AlatFormView.vue'),
        props: true,
        meta: { title: 'Ubah Alat' },
      },
      {
        path: 'kategori',
        name: 'kategori',
        component: () => import('@/views/KategoriView.vue'),
        meta: { title: 'Kategori' },
      },
      {
        path: 'peminjaman',
        name: 'peminjaman',
        component: () => import('@/views/peminjaman/PeminjamanListView.vue'),
        meta: { title: 'Peminjaman' },
      },
      {
        path: 'peminjaman/tambah',
        name: 'peminjaman-tambah',
        component: () => import('@/views/peminjaman/PeminjamanFormView.vue'),
        meta: { title: 'Catat Peminjaman' },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: 'Halaman Tidak Ditemukan' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

router.afterEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} · SIPINLAB`
    : 'SIPINLAB'
})

export default router
