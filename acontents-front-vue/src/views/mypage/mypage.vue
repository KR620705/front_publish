<template>
  <div class="mypage mypage">
    
    <section class="wrap-mypage">
      <ul class="mypage-tb">
        <li>
          <dl>
            <dt>이름</dt>
            <dd>박*영
              <!--
                주/부 사업자 정보는 class="none"을 추가하면 보여지지 않습니다.
                예시 ) <dl> -> <dl class="none">
                -->
                <!-- 주/부 사업자 정보 -->
                <dl class="">
                  <dt>
                    <i>주사업자</i> 이용중
                  </dt>
                  <dd>
                    <button type="button" class="btn small">변경</button>
                  </dd>
                </dl>
                <!-- // 주/부 사업자 정보 -->

            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>ABO</dt>
            <dd>748****</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>생년월일</dt>
            <dd>1990.02.12</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>성별</dt>
            <dd>여</dd>
          </dl>
        </li>
      </ul>

    </section>

    <section class="wrap-caution">
      <p>
        개인정보수정을 원하실 경우 한국암웨이 사이트에서 수정하실 수 있습니다.
      </p> 
    </section>
    
    <section class="check-group mypage">
      <h2 class="h2-title">
        선호카테고리
        <button type="button" class="btn small">변경</button>
      </h2>
      <div class="wrap-checkbox-array">
        <ul class="checkbox-array">
          <li><input type="checkbox" id="check1-1" value="" checked><label for="check1-1">NUTRILITE</label></li>
          <li><input type="checkbox" id="check1-2" value="" checked><label for="check1-2">ARTISTRY</label></li>
          <li><input type="checkbox" id="check1-3" value="" checked><label for="check1-3">엣모스키어스카이</label></li>
          <li><input type="checkbox" id="check1-4" value="" checked><label for="check1-4">사업현황</label></li>
          <li><input type="checkbox" id="check1-5" value="" checked><label for="check1-5">보상프로그램</label></li>
        </ul>
      </div>
    </section>

    <section class="btn-wrap-mypage">
      <button type="button" class="btn default">회원탈퇴</button>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Mypage',
  data: function () {
    return {

    }
  },
  mounted() {
    // page start !!
    sessionStorage.clear();

  },
  methods:{

  },
}
</script>
<style scoped>
  
</style>