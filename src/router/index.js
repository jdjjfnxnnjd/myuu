import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloWorld from '../components/HelloWorld.vue'
import digui from "@/components/digui/digui.vue";
import Child from "@/components/Child.vue";
import Hello from "@/components/show/hello.vue";
import world from "@/components/show/world.vue";
import table from "@/components/table/table.vue";
import testHtml from "@/components/testHtml.vue";
import map from "@/components/testmap/map.vue";
import map1 from "@/components/map.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dg',
    component: HelloWorld
  },
  {
    path: '/helloWorld',
    name: 'helloWorld',
    component: HelloWorld
  },
  {
    path: '/child',
    name: 'child',
    component: Child
  },
  {
    path: '/hello',
    name: 'hello',
    component: Hello
  },
  {
    path: '/world',
    name: 'world',
    component: world
  },
  {
    path: '/table',
    name: 'table',
    component: table
  },
  {
    path: '/html',
    name: 'html',
    component: testHtml
  },
  {
    path: '/map',
    name: 'map',
    component: map
  },
  {
    path: '/map1',
    name: 'map1',
    component: map1
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
