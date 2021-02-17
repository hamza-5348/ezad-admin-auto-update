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
      { path: '', redirect: 'dashboard' },
      { path: 'dashboard', component: () => import('src/views/Dashboard.vue') },
      { path: 'emails', component: () => import('src/views/Emails') },
      { path: 'entities', component: () => import('src/views/Entities') },
      { path: 'calls', component: () => import('src/views/Calls') },
      { path: 'reminders', component: () => import('src/views/Reminders') },
      { path: 'tags', component: () => import('src/views/Tags') },
      { path: 'settings', component: () => import('src/views/Settings') },
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
