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
    component: () => import('../views/auth/login'),
    meta: {
      isIndex: true,
    },
  },
  {// 로그인 > 주/부사업자 선택
    path: '/select_user',
    name: 'Select_user',
    component: () => import('../views/auth/select_user'),
    meta: {
      isIndex: true,
    },
  },
  {// 로그인 > 카테고리 선택
    path: '/select_category',
    name: 'Select_category',
    component: () => import('../views/auth/select_category'),
    meta: {
      isIndex: true,
    },
  },
  {// 로그인 > 약관동의
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/auth/terms'),
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
  {// 리스트 > 빅배너
    path: '/bigbanner_list',
    name: 'Bigbanner_list',
    component: () => import('../views/list/bigbanner_list'),
  },
  {// 리스트 > 카테고리
    path: '/category_list',
    name: 'Category_list',
    component: () => import('../views/list/category_list'),
  },
  {// 리스트 > 카테고리
    path: '/curation_list',
    name: 'Curation_list',
    component: () => import('../views/list/curation_list'),
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
  {// 마이페이지 > 마이페이지 메인
    path: '/mypage',
    name: 'Mypage',
    component: () => import('../views/mypage/mypage'),
  },
  {// faq
    path: '/faq',
    name: 'Faq',
    component: () => import('../views/menu/faq'),
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
