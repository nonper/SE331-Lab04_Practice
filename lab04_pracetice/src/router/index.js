import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventDetails from '../views/EventDetailView.vue'
import AirlineDetails from '../views/AirlineDetails.vue'
import NotFoundResource from '../views/event/NotFoundResource.vue'
import NotFoundPage from '../views/event/NotFoundPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/passenger/:id',
    name: 'EventDetails',
    component: EventDetails,
    props: true
  },
  {
    path: '/airline/:id',
    name: 'AirlineDetails',
    component: AirlineDetails,
    props: true
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFoundResource,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
