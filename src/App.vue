<template>
  <div>
    <h1 class="test__test">
      Vue Samle {{ state.count }}
    </h1>
    <CoverComponents />
    <button @click="increment()">ぷらす</button>
    <button @click="decrement()">まいなす</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, ref } from 'vue'
import CoverComponent from '@/components/CoverComponent'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    CoverComponent,
  },
  setup() {
    const store = useStore()
    const state: {
      count: number,
    } = reactive({
      count: store.getters.getCount
    })
    const increment = () => {
      store.dispatch('INCREMENT')
      state.count = store.getters.getCount
    }
    const decrement = () => {
      store.dispatch('DECREMENT')
      state.count = store.getters.getCount
    }
    return {
      state,
      increment,
      decrement
    }
  }
})
</script>

<style lang="sass" scoped>
.test
  &__test
    color: red
</style>
