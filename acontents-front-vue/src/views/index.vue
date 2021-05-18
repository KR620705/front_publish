<template>
  <div class="guideindex">
    <h1 class="guideh1">A Content Front INDEX</h1>
    <h2 class="guideh2">폴더구조</h2>
    <div class="wrap_tbl">
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

    <h2 class="guideh2">페이지</h2>
    <div class="wrap_tbl">
      <table>
        <colgroup>
          <col width="4%" />
          <col width="10%" />
          <col width="15%" />
          <col width="12%" />
          <col width="10%" />
          <col width="10%" />
          <col width="*" />
          <col width="15%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">1Depth</th>
            <th scope="col">2Depth</th>
            <th scope="col">경로</th>
            <th scope="col">완료</th>
            <th scope="col">수정일자</th>
            <th scope="col">비고</th>
            <th scope="col">파일명&amp;Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">공통</td>
            <td class="alL">gnb</td>
            <td class="alL">/components/base</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">sidemenu.component파일에서 '.sidemenu'에 aside-open 클래스추가하여 페이지 확인</td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL" rowspan="4">로그인</td>
            <td class="alL">로그인</td>
            <td class="alL" rowspan="4">/views/auth</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">약관동의</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">주/부사업자 선택</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">선호 카테고리 선택</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL" rowspan="2">메인</td>
            <td class="alL">메인</td>
            <td class="alL" rowspan="2">/views/main</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <router-link to="/main">
                main
              </router-link>
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">비회원/비로그인 사전 렌딩</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/landing">
                landing
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL" rowspan="3">리스트</td>
            <td class="alL">비주얼 빅배너 목록</td>
            <td class="alL" rowspan="3">/views/list</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">카테고리 콘텐츠 목록</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">큐레이션 콘텐츠 목록</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">상세</td>
            <td class="alL">상세</td>
            <td class="alL">/views/details</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <router-link to="/detail">
                detail
              </router-link>
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL" rowspan="6">메뉴</td>
            <td class="alL">맞춤추천 목록</td>
            <td class="alL" rowspan="6">/views/menu</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <router-link to="/recomlist">
                recomlist
              </router-link>
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">맞춤추천 목록 nodata</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <router-link to="/recomlistnodata">
                recomlistnodata
              </router-link>
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">마이 목록</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <router-link to="/mylist">
                mylist
              </router-link>
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">마이 목록 편집</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <router-link to="/mylistedit">
                mylistedit
              </router-link>
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">마이 목록 nodata</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <router-link to="/mylistnodata">
                mylistnodata
              </router-link>
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">FAQ</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL" rowspan="3">마이페이지</td>
            <td class="alL">마이페이지 메인</td>
            <td class="alL" rowspan="3">/views/mypage</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">주/부 사업자 변경</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">선호 카테고리 변경</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL" rowspan="3">검색</td>
            <td class="alL">검색</td>
            <td class="alL" rowspan="3">/views/search</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">검색결과</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">검색결과 nodata</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL" rowspan="2">팝업</td>
            <td class="alL">이미지 팝업</td>
            <td class="alL" rowspan="2">/views/popup</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">공유하기 팝업</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <router-link to="/modalshare">
                modalshare
              </router-link>
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL" rowspan="5">기타</td>
            <td class="alL">이용약관</td>
            <td class="alL" rowspan="5">/views/etc</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">개인정보처리방침</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">로딩페이지</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">오류페이지</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">콘텐츠 외부 접근 페이지</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alL">
              <!-- <router-link to="/">
                
              </router-link> -->
            </td>
          </tr>
          <tr>
            <th scope="row" class="num">※</th>
            <td class="alL">퍼블리싱 가이드</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
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
  .wrap_tbl table {width:100%; border-collapse:collapse;}
  .wrap_tbl table {margin-top:10px;text-align:center;border-top:2px #326dc2 solid;}
  .wrap_tbl table tr > th,
  .wrap_tbl table tr > td {padding:10px; border-left:1px #dedede solid; border-top:1px #dedede solid;vertical-align:top;}
  .wrap_tbl table tr > th:first-child,
  .wrap_tbl table tr > td:first-child{border-left:none;}
  .wrap_tbl table thead tr:first-child > th,
  .wrap_tbl table tbody tr:first-child > th,
  .wrap_tbl table tbody tr:first-child > td {border-top:none;}
  .wrap_tbl table thead tr > th {background:#eee; font-size:13px;}
  .wrap_tbl table tbody tr > th {background:#f9f9f9;}
  .wrap_tbl table thead tr > th {color:#000; font-weight:bold;}
  .wrap_tbl table tbody {font-size:13px; border-bottom:1px #ccc solid; border-top:1px #ccc solid;}
  .wrap_tbl .alC {text-align:center !important;}
  .wrap_tbl .alL {text-align:left !important;}
  .wrap_tbl .alR {text-align:right !important;}
  .wrap_tbl .vertical_t {vertical-align:top !important;}
  .wrap_tbl{min-width:980px;margin:0 auto;box-sizing: border-box;}
  .wrap_tbl a{color:#666;}
  .wrap_tbl a:hover{color:#326dc2;}
  .wrap_tbl .chk th,
  .wrap_tbl .chk td{color: blue !important;}
  .wrap_tbl tbody.add th,
  .wrap_tbl tbody.add td{color:#00a383 !important;}
  .wrap_tbl tbody.add2 th,
  .wrap_tbl tbody.add2 td{color:#a38300 !important;}
  .wrap_tbl .red{color:#f00 !important;}
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