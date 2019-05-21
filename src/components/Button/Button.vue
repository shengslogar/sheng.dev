<template>
  <button @click="$emit('click', $event)"
          type="button"
          class="app-button"
          :class="classList">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    isFullWidth: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      return {
        '.app-button--full-width': this.isFullWidth,
      };
    },
  },
}
</script>

<style lang="scss">
.app-button {
  font-size     : 1.5rem;
  border-radius : .25rem;
  color         : #ffffff;
  padding       : 1rem 2.25rem;
  box-shadow    : 0 1px 2px rgba(0, 0, 0, .05);
  background    : linear-gradient(110deg, #4b50ff, #4450ff);
  border        : none;
  outline       : none;
  cursor        : pointer;
  margin        : 1rem 0;

  &--full-width {
    width : 100%;
  }

  &:hover {
    box-shadow : 0 2px 8px rgba(0, 0, 0, .1);
    transform  : translateY(-4px);
  }
}
</style>
