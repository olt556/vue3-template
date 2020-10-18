<template>
  <div class="test__test">
    test components
    <div class="test__test">
      test components
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({})
</script>

<style lang="sass" scoped>
.test
  &__test
    color: blue
</style>
