import constants from "src/common/constants";

const routes = [
  {
    path: '/',
    component: () => import('layouts/Login.vue'),

  },
  {
    path: '/p',
    component: () => import('layouts/Practice.vue'),

  },
  {
    path: constants.ROUTES.dashboard,
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/views/Dashboard.vue') },
      { path: 'emails', component: () => import('src/views/Emails') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('src/views/Error404.vue')
  }
]

export default routes
