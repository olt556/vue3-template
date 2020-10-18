import { createStore } from 'vuex'
import {
  GetterTree,
  ActionTree,
  MutationTree,
  Commit,
  Dispatch,
} from 'vuex/types/index'

type RootState = {
  'count': number
}
type VuexArgs = {
  commit: Commit
  dispatch: Dispatch
}

const rootState: RootState = {
  count: 0
}

const getters: GetterTree<RootState, unknown> = {
  getCount() {
    return rootState.count
  }
}
const actions: ActionTree<RootState, unknown> = {
  INCREMENT({ commit }: VuexArgs) {
    commit('INCREMENT')
  },
  DECREMENT({ commit }: VuexArgs) {
    commit('DECREMENT')
  }
}
const mutations: MutationTree<RootState> = {
  INCREMENT() {
    rootState.count++
  },
  DECREMENT() {
    rootState.count--
  }
}

const RootStore = {
  rootState,
  getters,
  actions,
  mutations
}

export const store = createStore(RootStore)
