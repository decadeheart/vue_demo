// src/store/index.js 完整代码

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex);

const state = {
  totalTime: 0,
  list: []
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})