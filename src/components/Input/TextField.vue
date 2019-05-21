<template>
  <textarea v-if="isMultiLine"
            @change="handleChange"
            :value="value"
            :placeholder="labelText"
            class="app-text-field app-text-field--multiline"></textarea>
  <input v-else
         @change="handleChange"
         :value="value"
         :placeholder="labelText"
         class="app-text-field"
         type="text">
</template>

<script>
export default {
  name: 'TextField',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    labelText: {
      type: String,
      default: '',
    },
    isMultiLine: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleChange({ target: { value } }) {
      this.$emit('change', value);
    },
  },
}
</script>

<style lang="scss">
.app-text-field {
  display       : block;
  border        : 3px solid #ebebeb;
  border-radius : .5rem;
  margin        : 1rem 0;
  width         : 100%;
  outline       : none;
  padding       : 1rem;
  font-size     : 1.25rem;

  &:focus {
    border-color : #4950ff;
  }

  &--multiline {
    resize : none;
    height : 250px;
  }
}
</style>
