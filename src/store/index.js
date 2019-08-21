import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  list: [],
  article:[],
  topicList: []
}
export function createStore () {
  return new Vuex.Store({
    state,
    actions,
    mutations,
    getters
  })
}
