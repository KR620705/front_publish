<template>
  <div>
    <div class="home">
      <div>이곳은 home 입니다.</div>
      <div>
        <button type="button"
                class="btn"
                @click="openPop">
          <span>모달창 오픈</span>
        </button>
      </div>
    </div>

    <!-- modal : 샘플 모달 -->
    <app-modal title="샘플 모달"
               :visible.sync="isOpen">
      <div class="tbl">
        <table>
          <colgroup>
            <col style="width:30%;" />
            <col />
          </colgroup>
          <tr>
            <th scope="col">고객</th>
            <td>name</td>
          </tr>
          <tr>
            <th scope="col">장소</th>
            <td>place</td>
          </tr>
          <tr>
            <th scope="col">접수내용</th>
            <td>
              receptionContents
            </td>
          </tr>
        </table>
      </div>
      <div class="btn_area">
        <button type="button"
                class="basic-btn02 btn-black-bd popup_close"
                @click="openPop">
          <span>닫기</span>
        </button>
      </div>
    </app-modal>
    <!--// modal : 샘플 모달 -->
  </div>
</template>

<script>
import appModal from '@/components/base/Modal.component.vue';

export default {
  name: 'Home',
  components: {
    appModal
  },
  data: function () {
    return {
      isOpen: false,
    }
  },
  mounted() {
    // page start

  },
  methods:{
    openPop() {
      this.isOpen = !this.isOpen;
    }
  },
}
</script>
