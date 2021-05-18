import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {// index default
    path: '/',
    name: 'Index',
    component: () => import('../views/index'),
    meta: {
      isIndex: false,
    },
  },
  {// guide default
    path: '/guide',
    name: 'Guide',
    component: () => import('../views/guide'),
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
  {// main
    path: '/main',
    name: 'Main',
    component: () => import('../views/main/main'),
    meta: {
      isIndex: true,
    },
  },
  {// main
    path: '/main2',
    name: 'Main2',
    component: () => import('../views/main/main2'),
    meta: {
      isIndex: true,
    },
  },
  // {// 랜딩
  //   path: '/landing',
  //   name: 'Landing',
  //   component: () => import('../views/main/landing'),
  //   meta: {
  //     isIndex: false,
  //   },
  // },
  {// test
    path: '/test',
    name: 'Test',
    component: () => import('../views/test'),
    meta: {
      isIndex: true,
    },
  },
  {// 상세
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/details/detail'),
    meta: {
      isIndex: true,
    },
  },
  {// 메뉴 > 맞춤추천 목록
    path: '/recomlist',
    name: 'Recomlist',
    component: () => import('../views/menu/recomlist'),
    meta: {
      isIndex: true,
    },
  },
  {// 메뉴 > 맞춤추천 목록 nodata
    path: '/recomlistnodata',
    name: 'Recomlistnodata',
    component: () => import('../views/menu/recomlistnodata'),
    meta: {
      isIndex: true,
    },
  },
  {// 메뉴 > 마이 목록
    path: '/mylist',
    name: 'Mylist',
    component: () => import('../views/menu/mylist'),
    meta: {
      isIndex: true,
    },
  },
  {// 메뉴 > 마이 목록 편집
    path: '/mylistedit',
    name: 'Mylistedit',
    component: () => import('../views/menu/mylistedit'),
    meta: {
      isIndex: true,
    },
  },
  {// 메뉴 > 마이 목록 nodata
    path: '/mylistnodata',
    name: 'Mylistnodata',
    component: () => import('../views/menu/mylistnodata'),
    meta: {
      isIndex: true,
    },
  },
  {// 검색
    path: '/search',
    name: 'Search',
    component: () => import('../views/search/search'),
    meta: {
      isIndex: false,
    },
  },
  {// 팝업 > 공유하기
    path: '/modalshare',
    name: 'Modalshare',
    component: () => import('../views/popup/modalshare'),
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
