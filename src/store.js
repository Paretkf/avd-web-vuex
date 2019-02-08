import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
  users: [],
  img: []
}

const mutations = {
  SET_NEW_USER (state, data) {
    state.users.push(data)
  },
  REMOVE_USER (state, index) {
    state.users.splice(index, 1)
  },
  SET_IMG (state, data) {
    state.img = data
  }
}
const actions = {
  addNewUser ({commit}, data) {
    commit('SET_NEW_USER', data)
  },
  removerUser ({commit}, index) {
    commit('REMOVE_USER', index)
  },
  async getImg ({commit}) {
    const apiKey = '2jDWxGFa3ks3pUPg2ZbkMlLYRRWkddz1'
    const search ='jisoo'
    const { data } = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=30&offset=0&rating=G&lang=en`)
    commit('SET_IMG', data)
  }
}
const getters = {
  
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
