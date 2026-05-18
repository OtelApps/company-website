import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './src/views/HomePage.vue'
import AboutUs from './src/views/AboutUs.vue'
import Pricing from './src/views/Pricing.vue'
import Contact from './src/views/Contact.vue'
import BookDemo from './src/views/BookDemo.vue'
import GuestApp from './src/views/Product/GuestApp.vue'
import HotelDirectory from './src/views/Product/HotelDirectory.vue'
import TripPlanner from './src/views/Product/TripPlanner.vue'
import VirtualReceptionist from './src/views/Product/VirtualReceptionist.vue'
import VirtualKey from './src/views/Product/VirtualKey.vue'
import CheckInCheckOut from './src/views/Product/CheckInCheckOut.vue'
import StayProgress from './src/views/Product/StayProgress.vue'
import InstantFeedback from './src/views/Product/InstantFeedback.vue'
import TaskManager from './src/views/Product/TaskManager.vue'
import AnalyticsInsights from './src/views/Product/AnalyticsInsights.vue'
import MobileOrdering from './src/views/Product/MobileOrdering.vue'
import WebAdmin from './src/views/Product/WebAdmin.vue'
import CityCenter from './src/views/Solutions/CityCenter.vue'
import SmallHotels from './src/views/Solutions/SmallHotels.vue'
import Boutiques from './src/views/Solutions/Boutiques.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/AboutUs', component: AboutUs },
  { path: '/Pricing', component: Pricing },
  { path: '/Contact', component: Contact },
  { path: '/BookDemo', component: BookDemo },
  { path: '/Product/GuestApp', component: GuestApp },
  { path: '/Product/HotelDirectory', component: HotelDirectory },
  { path: '/Product/TripPlanner', component: TripPlanner },
  { path: '/Product/VirtualReceptionist', component: VirtualReceptionist },
  { path: '/Product/VirtualKey', component: VirtualKey },
  { path: '/Product/CheckInCheckOut', component: CheckInCheckOut },
  { path: '/Product/StayProgress', component: StayProgress },
  { path: '/Product/InstantFeedback', component: InstantFeedback },
  { path: '/Product/TaskManager', component: TaskManager },
  { path: '/Product/AnalyticsInsights', component: AnalyticsInsights },
  { path: '/Product/MobileOrdering', component: MobileOrdering },
  { path: '/Product/WebAdmin', component: WebAdmin },
  { path: '/Solution/CityCenter', component: CityCenter },
  { path: '/Solution/SmallHotels', component: SmallHotels },
  { path: '/Solution/Boutiques', component: Boutiques },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router
