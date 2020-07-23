import Home from './common/components/Home.vue'
import StarShipList from './common/components/starships/StarShipList.vue'
import StarShipDetailsPage from './common/components/starships/StarShipDetailsPage.vue'
import Cart from './common/Cart.vue'

export const routes = [
  { path: '', component: Home, name: 'Home' },
  {
    path: '/starships',
    component: StarShipList,
    name: 'StarShipList'
  },
  {
    path: '/starships/:id',
    component: StarShipDetailsPage,
    name: 'StarShipDetailsPage'
  },
  { path: '/cart', component: Cart, name: 'Cart', props: true },

  { path: '*', redirect: '/' }
]


