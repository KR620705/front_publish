<template>
  <div class="etc membership-withdrawal">
    <form>
      <fieldset>
        <legend>회원탈퇴</legend>

          <section class="wrap-withdrawal">
              <section>
                <div class="titlearea wrap-withdrawal-title">
                  <h2 class="h2-title">회원탈퇴</h2>
                </div>
              </section>
              <section class="titlearea wrap-withdrawal-text">
                <dl>
                  <dt>회원탈퇴는 A콘텐츠 서비스 탈퇴를 의미합니다.</dt>
                  <dd>
                      탈퇴하시면 A콘텐츠 이용은 불가하지만 
                      www.amway.co.kr의 이용은 기존의 아이디와 
                      비밀번호 그대로 사용 가능합니다. 
                  </dd>
                </dl>
                <dl>
                  <dt>회원탈퇴 후 A콘텐츠에 저장된 회원정보 및 이용기록은 모두 삭제됩니다.</dt>
                  <dd>
                      회원정보 및 사이트 이용기록은 모두 삭제되며, 
                      삭제된 데이터는 복구가 불가합니다.
                  </dd>
                </dl>
              </section>
              <section class="wrap-radio">
                <p>
                  위 유의사항을 모두 확인하였으며 이에 동의합니다.
                </p>
                  <div class="radio-group">
                    <label>
                      <input type="radio" id="no" name="agreed" value="no" checked>
                      <span>아니오</span>
                    </label>
                    <label>
                      <input type="radio" id="yes" name="agreed" value="yes">
                      <span>동의합니다.</span>
                    </label>
                  </div>
              </section>
              <section class="wrap-bottom-btn">
                <!-- 
                  선택완료 시 아래의 button 클래스 변경
                  (회색 버튼에서 붉은색 버튼으로)
                  class="btn gray" -> class="btn red"
                -->
                <button type="button" class="btn gray">회원탈퇴</button>
              </section>
          </section>

      </fieldset>
     </form>
    

  </div>
</template>

<script>
export default {
  name: 'Membership_withdrawal',
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