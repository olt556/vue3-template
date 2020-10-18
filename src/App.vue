<template>
  <div>
    <h1 class="test__test">
      Vue Samle {{ state.count }}
    </h1>
    <CoverComponent />
    <button @click="increment()">
      ぷらす
    </button>
    <button @click="decrement()">
      まいなす
    </button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, computed, reactive, ref,
} from 'vue'
import CoverComponent from './components/CoverComponent'
import provider from './provider'

export default defineComponent({
  components: {
    CoverComponent,
  },
  setup() {
    const { state, increment, decrement } = provider()
    return {
      state,
      increment,
      decrement,
    }
  },
})
</script>

<style lang="sass" scoped>
.test
  &__test
    color: red
</style>
