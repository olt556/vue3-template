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

  const actions = {
    increment() {
      mutations.increment()
    },
    decrement() {
      mutations.decrement()
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

  return {
    state,
    getters,
    actions
  }
}
