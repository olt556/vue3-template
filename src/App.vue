<template>
  <div>
    <h1 class="test__test">
      Vue Samle
    </h1>
    <CoverComponents />
  </div>
</template>

<script lang="ts">
import CoverComponents from '@/components/CoverComponents'

export default {
  components: {
    CoverComponents,
  },
}
</script>

<style lang="sass" scoped>
.test
  &__test
    color: red
</style>
