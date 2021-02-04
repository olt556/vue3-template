<template>
  <div>
    <h1 class="test__test">
      Vue Samle {{ getters.getCount() }}
    </h1>
    <CoverComponent />
    <button @click="actions.increment()">
      ぷらす
    </button>
    <button @click="actions.decrement()">
      まいなす
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CoverComponent from '@/components/CoverComponent'
import { useStore } from '@/store/index'

export default defineComponent({
  components: {
    CoverComponent,
  },

  setup() {
    const {
      state,
      actions,
      getters,
    } = useStore().useStoreTop
    return {
      state,
      actions,
      getters,
    }
  },
})
</script>

<style lang="sass" scoped>
.test
  &__test
    color: red
</style>
