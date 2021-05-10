<template>
  <transition name="modal">
  <div class="modal"
       v-if="visible">
    <div class="modal__mask" @click.self="handleWrapperClick"></div>
    <div class="modal__dialog">
      <header class="modal__header">
        <h1>{{title}}</h1>
        <button class="js-modal-close"
                @click="handleWrapperClick">
          <span class="material-icons">close</span>
        </button>
      </header>
      <div class="modal__body">
        <slot></slot>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      require: true,
      default: false
    },
    title: {
      type: String,
      require: false,
    },
  },
  methods: {
    handleWrapperClick(){
      this.$emit('update:visible', false)
    },
  },
}
</script>