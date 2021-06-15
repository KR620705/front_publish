<template>
  <div class="guideindex">
    <h1 class="guideh1">A Content Front INDEX</h1>
    <h2 class="guideh2">폴더구조</h2>
    <div class="guide-tbl">
      <table class="guideTbl01">
        <colgroup>
          <col width="33%" />
          <col width="33%" />
          <col width="34%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">시스템</th>
            <th scope="col">분류</th>
            <th scope="col">폴더명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="alL" rowspan="5">acontents-front-vue/</td>
            <td class="alL">공통파일(header, footer, layout, modal, sidemenu)</td>
            <td class="alL">/components/base/</td>
          </tr>
          <tr>
            <td class="alL">페이지</td>
            <td class="alL">/views/</td>
          </tr>
          <tr>
            <td class="alL">scss</td>
            <td class="alL">/assets/scss/</td>
          </tr>
          <tr>
            <td class="alL">font</td>
            <td class="alL">/assets/scss/font</td>
          </tr>
          <tr>
            <td class="alL">img</td>
            <td class="alL">/assets/images/</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="guideh2">페이지 <span class="guide-desc">(개발에 공유할 경우, 개발공유일에 공유한 날짜를 기입한다.)</span></h2>
    <div class="guide-tbl">
      <table>
        <colgroup>
          <col width="9%" />
          <col width="14%" />
          <col width="10%" />
          <col width="5%" />
          <col width="5%" />
          <col width="9%" />
          <col width="9%" />
          <col width="*" />
          <col width="6%" />
          <col width="15%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" rowspan="2">1Depth</th>
            <th scope="col" rowspan="2">2Depth</th>
            <th scope="col" rowspan="2">경로</th>
            <th scope="col" colspan="3">완료여부</th>
            <th scope="col" rowspan="2">수정일</th>
            <th scope="col" rowspan="2">비고</th>
            <th scope="col" rowspan="2">작업자</th>
            <th scope="col" rowspan="2">파일명&amp;Link</th>
          </tr>
          <tr>
            <th scope="col">MO</th>
            <th scope="col">PC</th>
            <th scope="col">개발공유일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="alL">공통</td>
            <td class="alL">gnb</td>
            <td class="alL">/components/base</td>
            <td>완료</td>
            <td>완료</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td>조우빈</td>
            <td class="alL">sidemenu.component파일에서 '.sidemenu'에 aside-open 클래스추가하여 페이지 확인</td>
          </tr>
          <tr>
            <td class="alL" rowspan="5">로그인</td>
            <td class="alL">로그인</td>
            <td class="alL" rowspan="5">/views/auth</td>
            <td>완료</td>
            <td>완료</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td>이재이</td>
            <td class="alL">
              <router-link to="login">
                login
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">약관동의</td>
            <td>완료</td>
            <td>완료</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td>이재이</td>
            <td class="alL">
              <router-link to="/terms">
                terms
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">주/부사업자 선택</td>
            <td>완료</td>
            <td>완료</td>
            <td></td>
            <td class="alL red"></td>
            <td></td>
            <td>이재이</td>
            <td class="alL">
              <router-link to="/select_user">
                select_user
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">선호 카테고리 선택</td>
            <td>완료</td>
            <td>완료</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td>이재이</td>
            <td class="alL">
              <router-link to="/select_category">
                select_category
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">회원탈퇴</td>
            <td>완료</td>
            <td>완료</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td>이재이</td>
            <td class="alL">
              <router-link to="/membership_withdrawal">
                membership_withdrawal
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL" rowspan="2">메인</td>
            <td class="alL">메인</td>
            <td class="alL" rowspan="2">/views/main</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.10</td>
            <td>20210615</td>
            <td class="alL red">- 전체보기 버튼 삭제</td>
            <td>조우빈</td>
            <td class="alL">
              <router-link to="/main">
                main
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">비회원/비로그인 사전 렌딩</td>
            <td>완료</td>
            <td>완료</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td>이재이</td>
            <td class="alL">
              <router-link to="/landing">
                landing
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL" rowspan="3">리스트</td>
            <td class="alL">비주얼 빅배너 목록</td>
            <td class="alL" rowspan="3">/views/list</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.10</td>
            <td></td>
            <td class="alL red"></td>
            <td>조우빈</td>
            <td class="alL">
              <router-link to="/bigbanner_list">
                bigbanner_list
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">카테고리 콘텐츠 목록</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.10</td>
            <td></td>
            <td class="alL red"></td>
            <td>조우빈</td>
            <td class="alL">
              <router-link to="/category_list">
                category_list
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">큐레이션 콘텐츠 목록</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.10</td>
            <td></td>
            <td class="alL red"></td>
            <td>조우빈</td>
            <td class="alL">
              <router-link to="/curation_list">
                curation_list
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">상세</td>
            <td class="alL">상세</td>
            <td class="alL">/views/details</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.10</td>
            <td>20210615</td>
            <td class="alL red">- 버튼 순서 변경</td>
            <td>조우빈</td>
            <td class="alL">
              <router-link to="/detail">
                detail
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL" rowspan="7">메뉴</td>
            <td class="alL">맞춤추천 목록</td>
            <td class="alL" rowspan="7">/views/menu</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.14</td>
            <td></td>
            <td class="alL red"></td>
            <td>조우빈</td>
            <td class="alL">
              <router-link to="/recomlist">
                recomlist
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">맞춤추천 목록 nodata</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.14</td>
            <td></td>
            <td class="alL red"></td>
            <td>조우빈</td>
            <td class="alL">
              <router-link to="/recomlist_nodata">
                recomlist_nodata
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">즐겨찾기</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.14</td>
            <td></td>
            <td class="alL red"></td>
            <td>조우빈</td>
            <td class="alL">
              <router-link to="/mylist">
                mylist
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">즐겨찾기 편집</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.14</td>
            <td></td>
            <td class="alL red"></td>
            <td>조우빈</td>
            <td class="alL">
              <router-link to="/mylist_edit">
                mylist_edit
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">즐겨찾기 nodata</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.14</td>
            <td></td>
            <td class="alL red"></td>
            <td>조우빈</td>
            <td class="alL">
              <router-link to="/mylist_nodata">
                mylist_nodata
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">좋아요 nodata</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.14</td>
            <td></td>
            <td class="alL red"></td>
            <td>조우빈</td>
            <td class="alL">
              <router-link to="/like_nodata">
                like_nodata
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">FAQ</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.14</td>
            <td></td>
            <td class="alL red"></td>
            <td>조우빈</td>
            <td class="alL">
              <router-link to="/faq">
                faq
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL" rowspan="3">마이페이지</td>
            <td class="alL">마이페이지 메인</td>
            <td class="alL" rowspan="3">/views/mypage</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.14</td>
            <td></td>
            <td class="alL red"></td>
            <td>이재이</td>
            <td class="alL">
              <router-link to="/mypage">
                mypage
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">주/부 사업자 변경</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.14</td>
            <td></td>
            <td class="alL red"></td>
            <td>이재이</td>
            <td class="alL">
              <router-link to="/change_user">
                change_user
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">선호 카테고리 변경</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.14</td>
            <td></td>
            <td class="alL red"></td>
            <td>이재이</td>
            <td class="alL">
              <router-link to="/change_category">
                change_category
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL" rowspan="3">검색</td>
            <td class="alL">검색</td>
            <td class="alL" rowspan="3">/views/search</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.10</td>
            <td></td>
            <td class="alL red"></td>
            <td>이재이</td>
            <td class="alL">
              <router-link to="/search">
                search
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">검색결과</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.10</td>
            <td></td>
            <td class="alL red"></td>
            <td>이재이</td>
            <td class="alL">
              <router-link to="/search_result">
                search_result
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">검색결과 nodata</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.10</td>
            <td></td>
            <td class="alL red"></td>
            <td>이재이</td>
            <td class="alL">
              <router-link to="/search_result_nodata">
                search_result_nodata
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL" rowspan="2">팝업</td>
            <td class="alL">이미지 팝업</td>
            <td class="alL" rowspan="2">/views/popup</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.10</td>
            <td></td>
            <td class="alL red"></td>
            <td>조우빈</td>
            <td class="alL">
              <router-link to="/modal_image">
                modal_image
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">공유하기 팝업</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.10</td>
            <td></td>
            <td class="alL red"></td>
            <td>조우빈</td>
            <td class="alL">
              <router-link to="/modal_share">
                modal_share
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL" rowspan="5">기타</td>
            <td class="alL">이용약관</td>
            <td class="alL" rowspan="5">/views/etc</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.14</td>
            <td></td>
            <td class="alL red"></td>
            <td>이재이</td>
            <td class="alL">
              <router-link to="/etc_terms">
                etc_terms
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">개인정보처리방침</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.14</td>
            <td></td>
            <td class="alL red"></td>
            <td>이재이</td>
            <td class="alL">
              <router-link to="/policy">
                policy
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">로딩페이지</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.14</td>
            <td></td>
            <td class="alL red"></td>
            <td>이재이</td>
            <td class="alL">
              <router-link to="/loading">
                loading
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">오류페이지</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.14</td>
            <td></td>
            <td class="alL red"></td>
            <td>이재이</td>
            <td class="alL">
              <router-link to="/error">
                error
              </router-link>
            </td>
          </tr>
          <tr>
            <td class="alL">콘텐츠 외부 접근 페이지</td>
            <td>완료</td>
            <td>완료</td>
            <td>06.14</td>
            <td></td>
            <td class="alL red"></td>
            <td>이재이</td>
            <td class="alL">
              <router-link to="/external_access">
                external_access
              </router-link>
            </td>
          </tr>
          <tr>
            <th scope="row" class="num">※</th>
            <td class="alL" colspan="8">퍼블리싱 가이드</td>
            <td class="alL">
              <router-link to="/guide">
                guide
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    
  </div>
</template>

<style>
  .guideindex{padding:50px 10px;background:#fff;color:#000;}
  .guideindex .guideh1{margin-bottom:30px;font-size:26px;font-weight:600;text-align:center;}
  .guideindex .guideh2{margin-top:40px;font-size:16px;font-weight:600;}
  .guideindex .guide-tbl table {width:100%; border-collapse:collapse;border-right:1px #dedede solid;}
  .guideindex .guide-tbl table {margin-top:10px;text-align:center;border-top:2px #326dc2 solid;}
  .guideindex .guide-tbl table tr > th,
  .guideindex .guide-tbl table tr > td {padding:10px; border-left:1px #dedede solid; border-top:1px #dedede solid;vertical-align:top;}
  .guideindex .guide-tbl table thead tr:first-child > th,
  .guideindex .guide-tbl table tbody tr:first-child > th,
  .guideindex .guide-tbl table tbody tr:first-child > td {border-top:none;}
  .guideindex .guide-tbl table thead tr > th {background:#eee; font-size:13px;vertical-align:middle;}
  .guideindex .guide-tbl table tbody tr > td {vertical-align:top;}
  .guideindex .guide-tbl table thead tr > th {color:#000; font-weight:bold;}
  .guideindex .guide-tbl table tbody {font-size:13px; border-bottom:1px #ccc solid; border-top:1px #ccc solid;}
  .guideindex .guide-tbl .alC {text-align:center !important;}
  .guideindex .guide-tbl .alL {text-align:left !important;}
  .guideindex .guide-tbl .alR {text-align:right !important;}
  .guideindex .guide-tbl{min-width:980px;margin:0 auto;box-sizing: border-box;}
  .guideindex .guide-tbl a{color:#666;}
  .guideindex .guide-tbl a:hover{color:#326dc2;}
  .guideindex .guide-tbl .chk th,
  .guideindex .guide-tbl .chk td{color: blue !important;}
  .guideindex .guide-tbl tbody.add th,
  .guideindex .guide-tbl tbody.add td{color:#00a383 !important;}
  .guideindex .guide-tbl tbody.add2 th,
  .guideindex .guide-tbl tbody.add2 td{color:#a38300 !important;}
  .guideindex .guide-tbl .red{color:#f00 !important;}
  .guideindex .guide-tbl .complete{background-color:#ccc;}
  .guideindex .guide-tbl .remove{background-color:#fdeaea;}
  .guideindex .guide-desc{margin-left:10px;font-size:13px;}
</style>

<script>
export default {
  name: 'Index',
  data: function () {
    return {

    }
  },
  mounted() {
    // page start !!
    sessionStorage.clear();
    //this.AAA();
  },
  methods:{
    // AAA() {
    //   console.log('aaaa');
      
    // }

  },
}
</script>