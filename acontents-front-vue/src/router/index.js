import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {// 랜딩페이지 default
    path: '/',
    name: 'Landing',
    component: () => import('../views/landing'),
    meta: {
      isIndex: false,
    },
  },
  {// 가이드페이지
    path: '/guide',
    name: 'Guide',
    component: () => import('../views/landing/guide'),
    meta: {
      isIndex: false,
    },
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
  {// 마이페이지
    path: '/recommendlist',
    name: 'Recommendlist',
    component: () => import('../views/menu/recommendlist.vue'),
    meta: {
      isIndex: true,
    },
  },
  {// 대쉬보드
    path: '/home',
    name: 'Home',
    component: () => import('../views/dashboard')
  },
  {// main
    path: '/main',
    name: 'main',
    component: () => import('../views/main'),
    meta: {
      isIndex: true,
    },
  },
  {// 상세
    path: '/detail',
    name: 'detail',
    component: () => import('../views/details/detail'),
    meta: {
      isIndex: true,
    },
  },
  {// 공유하기 팝업
    path: '/modalshare',
    name: 'Modalshare',
    component: () => import('../views/details/modalshare'),
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
