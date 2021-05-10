<template>
  <div class="landing">
    <!-- <h1>랜딩페이지</h1> -->

    <h1>A Content 관리자 INDEX</h1>
    <div class="wrap_tbl">
      <table id="focus" class="guideTbl01">
        <colgroup>
          <col width="5%" />
          <col width="10%" />
          <col width="15%" />
          <col width="15%" />
          <col width="10%" />
          <col width="10%" />
          <col width="25%" />
          <col width="10%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">1Depth</th>
            <th scope="col">2Depth</th>
            <th scope="col">html</th>
            <th scope="col">완료</th>
            <th scope="col">수정일자</th>
            <th scope="col">비고</th>
            <th scope="col">LINK</th>
          </tr>
        </thead>
        <!--  1depth 구분은 tbody로 함 -->
        <!--  1depth가 1SET 임 -->
        <tbody>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">로그인</td>
            <td class="alL"></td>
            <td class="alL">login.html</td>
            <td>2021-04-29</td>
            <td></td>
            <td class="alL red"></td>
            <td class="alC">
              <router-link to="/login">
                페이지 이동
              </router-link>
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">메인</td>
            <td class="alL"></td>
            <td class="alL">main.html</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alC">
              <router-link to="/main">
                페이지 이동
              </router-link>
            </td>
          </tr>
          <tr>
            <th scope="row" class="num"></th>
            <td class="alL">상세</td>
            <td class="alL"></td>
            <td class="alL">detail.html</td>
            <td></td>
            <td></td>
            <td class="alL red"></td>
            <td class="alC">
              <router-link to="/detail">
                페이지 이동
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    
  </div>
</template>

<style>
  body{font-family:sans-serif, Malgungothic, "맑은고딕", Dotum, "돋움";}
  h1{margin-bottom:20px;font-size:26px;text-align:center;}
  table {width:100%; border-collapse:collapse;}
  table.guideTbl01 {margin-top:10px;text-align:center;border-top:2px #326dc2 solid;}
  table.guideTbl01 tr > th, table.guideTbl01 tr > td {padding:10px; border-left:1px #dedede solid; border-top:1px #dedede solid;vertical-align:top;}
  table.guideTbl01 tr > th:first-child, table.guideTbl01 tr > td:first-child{border-left:none;}
  table.guideTbl01 thead tr:first-child > th,
  table.guideTbl01 tbody tr:first-child > th,
  table.guideTbl01 tbody tr:first-child > td {border-top:none;}
  table.guideTbl01 thead tr > th {background:#eee; font-size:13px;}
  table.guideTbl01 tbody tr > th {background:#f9f9f9;}
  table.guideTbl01 thead tr > th {color:#000; font-weight:bold;}
  table.guideTbl01 tbody {font-size:12px; border-bottom:1px #ccc solid; border-top:1px #ccc solid;}
  table#focus thead tr > th {padding:15px 10px;}
  table#focus tbody tr > th {padding:10px;}
  table#focus tbody tr > td {padding:10px;}
  .alC {text-align:center !important;}
  .alL {text-align:left !important;}
  .alR {text-align:right !important;}
  .vertical_t {vertical-align:top !important;}
  .wrap_tbl{min-width:980px;padding:0 10px;margin:0 auto;box-sizing: border-box;}
  .chk th,
  .chk td{color: blue !important;}
  tbody.add th,
  tbody.add td{color:#00a383 !important;}
  tbody.add2 th,
  tbody.add2 td{color:#a38300 !important;}
  .red{color:#f00 !important;}
</style>

<script>
export default {
  name: 'Landing',
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