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
  {// 로그인 > 회원탈퇴
    path: '/membership_withdrawal',
    name: 'Membership_withdrawal',
    component: () => import('../views/auth/membership_withdrawal'),
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
    {// landing
      path: '/landing',
      name: 'Landing',
      component: () => import('../views/main/landing'),
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
  {// 상세 > 카드뉴스
    path: '/detail_cardnews',
    name: 'Detail_cardnews',
    component: () => import('../views/details/detail_cardnews'),
  },
  {// 상세 > 카드뉴스 전체보기
    path: '/detail_cardnewsfull',
    name: 'detail_cardnewsfull',
    component: () => import('../views/details/detail_cardnewsfull'),
    meta: {
      isFooter: true,
    },
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
  {// 메뉴 > 즐겨찾기
    path: '/mylist',
    name: 'Mylist',
    component: () => import('../views/menu/mylist'),
  },
  {// 메뉴 > 즐겨찾기 편집
    path: '/mylist_edit',
    name: 'Mylist_edit',
    component: () => import('../views/menu/mylist_edit'),
  },
  {// 메뉴 > 즐겨찾기 nodata
    path: '/mylist_nodata',
    name: 'Mylist_nodata',
    component: () => import('../views/menu/mylist_nodata'),
  },
  {// 메뉴 > 좋아요 nodata
    path: '/like_nodata',
    name: 'Like_nodata',
    component: () => import('../views/menu/like_nodata'),
  },
  {// 마이페이지 > 마이페이지 메인
    path: '/mypage',
    name: 'Mypage',
    component: () => import('../views/mypage/mypage'),
  },
  {// 마이페이지 > 주\부사업자 변경
    path: '/change_user',
    name: 'Change_user',
    component: () => import('../views/mypage/change_user'),
  },
  {// 마이페이지 > 선호 카테고리 변경
    path: '/change_category',
    name: 'Change_categorty',
    component: () => import('../views/mypage/change_category'),
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
  {// 기타 > 이용약관
    path: '/etc_terms',
    name: 'Etc_terms',
    component: () => import('../views/etc/etc_terms'),
  },
  {// 기타 > 개인정보처리방법
    path: '/policy',
    name: 'Policy',
    component: () => import('../views/etc/policy'),
  },
  {// 기타 > 콘텐츠 외부 접근 페이지
    path: '/external_access',
    name: 'External_access',
    component: () => import('../views/etc/external_access'),
  },
  {// 기타 > 오류페이지
    path: '/error',
    name: 'Error',
    component: () => import('../views/etc/error'),
  },
  {// 기타 > 로딩페이지
    path: '/loading',
    name: 'Loading',
    component: () => import('../views/etc/loading'),
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
