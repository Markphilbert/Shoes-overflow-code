import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Shop from '../views/Shop.vue'
import Trending from '../views/Trending.vue'
import LogIn from '../views/LogIn.vue'
import Register from '../views/Register.vue'

const instagram = { template: '<div>instagram</div>'}
const facebook = { template: '<div>facebook</div>'}
const twitter = { template: '<div>twitter</div>'}

const routes = [
{ 
		path: '/instagram',
		beforeEnter() {location.href = 'http://instagram.com'},
		component: instagram
},
{ 
  path: '/facebook',
  beforeEnter() {location.href = 'http://facebook.com'},
  component: facebook
},
{ 
  path: '/twitter',
  beforeEnter() {location.href = 'http://twitter.com'},
  component: twitter
},
{
    path: '/',
    name: 'Home',
    component: Home
},
{
    path: '/about',
    name: 'About',
    component: About
},
{
  path: '/shop',
  name: 'Shop',
  component: Shop
},
{
  path: '/contact',
  name: 'Contact',
  component: Contact
},
{
  path: '/trending',
  name: 'Trending',
  component: Trending
},
{
  path: '/login',
  name: 'LogIn',
  component: LogIn
},
{
  path: '/register',
  name: 'Register',
  component: Register
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes, scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
