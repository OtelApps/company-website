import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './src/views/HomePage.vue'
import AboutUs from './src/views/AboutUs.vue'
import Pricing from './src/views/Pricing.vue'
import GuestApp from './src/views/GuestApp.vue'
import HotelDirectory from './src/views/HotelDirectory.vue'
import InstantFeedback from './src/views/InstantFeedback.vue'
import TaskManager from './src/views/TaskManager.vue'
import AnalyticsInsights from './src/views/AnalyticsInsights.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/AboutUs', component: AboutUs },
  { path: '/Pricing', component: Pricing },
  { path: '/GuestApp', component: GuestApp },
  { path: '/HotelDirectory', component: HotelDirectory },
  { path: '/InstantFeedback', component: InstantFeedback },
  { path: '/TaskManager', component: TaskManager },
  { path: '/AnalyticsInsights', component: AnalyticsInsights },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
