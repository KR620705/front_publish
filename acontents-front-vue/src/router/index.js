import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {// index default
    path: '/',
    name: 'Index',
    component: () => import('../views/index'),
    meta: {
      isIndex: true,
    },
  },
  {// guide default
    path: '/guide',
    name: 'Guide',
    component: () => import('../views/guide'),
    meta: {
      isIndex: true,
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
      isMainHeader: true,
    },
  },
  {// main
    path: '/main2',
    name: 'Main2',
    component: () => import('../views/main/main2'),
    meta: {
      isMainHeader: true,
    },
  },
  {// 상세
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/details/detail'),
  },
  {// 메뉴 > 맞춤추천 목록
    path: '/recomlist',
    name: 'Recomlist',
    component: () => import('../views/menu/recomlist'),
  },
  {// 메뉴 > 맞춤추천 목록 nodata
    path: '/recomlist_nodata',
    name: 'Recomlist_nodata',
    component: () => import('../views/menu/recomlist_nodata'),
  },
  {// 메뉴 > 마이 목록
    path: '/mylist',
    name: 'Mylist',
    component: () => import('../views/menu/mylist'),
  },
  {// 메뉴 > 마이 목록 편집
    path: '/mylist_edit',
    name: 'Mylist_edit',
    component: () => import('../views/menu/mylist_edit'),
  },
  {// 메뉴 > 마이 목록 nodata
    path: '/mylist_nodata',
    name: 'Mylist_nodata',
    component: () => import('../views/menu/mylist_nodata'),
  },
  {// 검색
    path: '/search',
    name: 'Search',
    component: () => import('../views/search/search'),
  },
  {// 검색 결과
    path: '/search_result',
    name: 'Searc_result',
    component: () => import('../views/search/search_result'),
  },
  {// 검색 결과(nodata)
    path: '/search_result_nodata',
    name: 'Searc_result_nodata',
    component: () => import('../views/search/search_result_nodata'),
  },
  {// 팝업 > 공유하기
    path: '/modal_share',
    name: 'Modal_share',
    component: () => import('../views/popup/modal_share'),
  },
  {// 팝업 > 이미지
    path: '/modal_image',
    name: 'Modal_image',
    component: () => import('../views/popup/modal_image'),
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
