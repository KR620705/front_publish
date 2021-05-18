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
  {// main
    path: '/main',
    name: 'Main',
    component: () => import('../views/main'),
    meta: {
      isIndex: true,
    },
  },
  // {// test
  //   path: '/test',
  //   name: 'Test',
  //   component: () => import('../views/test'),
  //   meta: {
  //     isIndex: true,
  //   },
  // },
  {// 상세
    path: '/detail',
    name: 'Detail',
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
  {// 메뉴 > 맞춤추천리스트
    path: '/recomlist',
    name: 'Recomlist',
    component: () => import('../views/menu/recomlist.vue'),
    meta: {
      isIndex: true,
    },
  },
  {// 메뉴 > 맞춤추천리스트 nodata
    path: '/recomlistnodata',
    name: 'Recomlistnodata',
    component: () => import('../views/menu/recomlistnodata.vue'),
    meta: {
      isIndex: true,
    },
  },
  /*
  {// 대쉬보드
    path: '/home',
    name: 'Home',
    component: () => import('../views/dashboard')
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
  */
  {// 404 (존재하지 않는 경로로 이동시 경고 페이지로 넘김)
    path: '*',
    name: '404',
    component: () => import('../views/404.vue'),
  },
  {// 검샋
    path: '/search',
    name: 'Search',
    component: () => import('../views/search/search.vue'),
    meta: {
      isIndex: true,
    },
  },
]

const router = new VueRouter({
  routes
})

export default router
