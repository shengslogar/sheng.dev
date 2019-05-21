<template>
  <textarea v-if="isMultiLine"
            @change="handleChange"
            :value="value"
            :required="isRequired"
            :placeholder="labelText"
            class="app-text-field app-text-field--multiline"></textarea>
  <input v-else
         @change="handleChange"
         :value="value"
         :required="isRequired"
         :placeholder="labelText"
         class="app-text-field"
         :type="type">
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
    isRequired: {
      type: Boolean,
      default: false,
    },
    isMultiLine: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
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
  padding       : .8rem 1.25rem;
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
