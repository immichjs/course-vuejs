/* eslint-disable no-console */
import Vue from 'vue'
import Router from 'vue-router'

import Inicio from './components/Inicio'
// import PageNotFound from './components/PageNotFound'
import Menu from './components/Menu'
import MenuAlt from './components/MenuAlt'
// import Usuario from './components/Usuario'

// import UsuarioLista from './components/UsuarioLista'
// import UsuarioDetalhe from './components/UsuarioDetalhe'
// import UsuarioEditar from './components/UsuarioEditar'

const Usuario = () => import(/*webpackChunkName: "usuario"*/'./components/Usuario')
const UsuarioLista = () => import(/*webpackChunkName: "usuario"*/'./components/UsuarioLista')
const UsuarioDetalhe = () => import(/*webpackChunkName: "usuario"*/'./components/UsuarioDetalhe')
const UsuarioEditar = () => import(/*webpackChunkName: "usuario"*/'./components/UsuarioEditar')
const PageNotFound = () => import(/*webpackChunkName: "pageNotFound"*/'./components/PageNotFound')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return savedPosition
    } else if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [{
    name: 'inicio',
    path: '/',
    // component: Inicio
    components: {
      default: Inicio,
      menu: Menu,
    }
  }, {
    path: '/page_not_found',
    component: PageNotFound
  }, {
    path: '/usuario',
    components: {
      default: Usuario,
      menu: MenuAlt,
      menuInferior: MenuAlt,
    },
    props: true,
    children: [
      { path: '', component: UsuarioLista },
      { path: ':id', component: UsuarioDetalhe, props: true, beforeEnter: (to, from, next) => {
        console.log('Antes da roda -> usuário detalhe')
        next()
      } },
      { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' },
    ]
  }, {
    path: '/redirect',
    redirect: '/usuario'
  }, {
    path: '*',
    redirect: '/page_not_found'
  }]
})

router.beforeEach((to, from, next) => {
  console.log('Antes das rotas -> global')
  next()
})

export default router
