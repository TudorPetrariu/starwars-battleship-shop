import Home from './common/components/Home.vue'
import StarshipList from './common/components/starships/StarShipList.vue'
import StarShipItem from './common/components/starships/StarShipItem.vue'

export const routes = [
  { path: '/', component: Home },
  {
    path: '/starships',
    component: StarshipList,
    children: [{
      path: ':id',
      component: StarShipItem,
      name: 'StarShipItem'
    }]
  },
 
  // { path: '*', redirect: '/' }
]
