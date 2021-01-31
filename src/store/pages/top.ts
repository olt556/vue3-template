import { reactive } from 'vue'

export function useStoreTop() {
  const state: {
    count: number
  } = reactive({
    count: 0,
  })

  const getters = {
    getCount() {
      return state.count
    },
  }

  const mutations = {
    increment() {
      state.count += 1
    },
    decrement() {
      state.count -= 1
    },
  }

  const actions = {
    increment() {
      mutations.increment()
    },
    decrement() {
      mutations.decrement()
    },
  }

  return {
    state,
    getters,
    actions,
  }
}
