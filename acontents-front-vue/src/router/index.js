import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {// 랜딩페이지 default
    path: '/',
    name: 'Landing',
    component: () => import('../views/landing'),
  },
  {// 로그인
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth'),
    meta: {
      isIndex: true,
    },
  },
  {// 회원가입
    path: '/agree',
    name: 'Agree',
    component: () => import('../views/membership/agree.vue'),
    meta: {
      isIndex: true,
    },
  },
  {// 사용자 선택
    path: '/checkuser',
    name: 'Checkuser',
    component: () => import('../views/membership/checkuser.vue'),
    meta: {
      isIndex: true,
    },
  },
  {// 선호카테고리 선택
    path: '/checkcategory',
    name: 'Checkcategory',
    component: () => import('../views/membership/checkcategory.vue'),
    meta: {
      isIndex: true,
    },
  },
  {// 대쉬보드
    path: '/home',
    name: 'Home',
    component: () => import('../views/dashboard')
  },
  {// 임시
    path: '/main',
    name: 'main',
    component: () => import('../views/main.vue'),
    meta: {
      isIndex: true,
    },
  },
  {// 404 (존재하지 않는 경로로 이동시 경고 페이지로 넘김)
    path: '*',
    name: '404',
    component: () => import('../views/404.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
